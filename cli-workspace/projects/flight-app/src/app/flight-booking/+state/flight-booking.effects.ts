import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  FlightBookingActions, FlightBookingActionTypes, FlightsLoadedSuccess,
  FlightUpdateError,
  FlightUpdateSuccess,
  LoadFlights, UpdateFlight
} from './flight-booking.actions';
import {switchMap, catchError, map, concat, switchMapTo} from 'rxjs/operators';
import {Flight, FlightService} from '@flight-workspace/flight-api';
import {EMPTY, of} from 'rxjs';

@Injectable()
export class FlightBookingEffects {

  @Effect()
  loadFlights$ = this.actions$.pipe(
    ofType(FlightBookingActionTypes.LoadFlights),
    switchMap((action: LoadFlights) => {
      return this.fs
        .find(action.payload.from, action.payload.to)
        .pipe(
          map((flights: Flight[]) => new FlightsLoadedSuccess({flights: flights})),
        );

    }));

  @Effect()
  updateFlight$ = this.actions$.pipe(
    ofType(FlightBookingActionTypes.UpdateFlight),
    switchMap((action: UpdateFlight) => {
      return this.fs
        .save(action.payload.flight)
        .pipe(
          map((flight: Flight) => new FlightUpdateSuccess({newFlight: flight})),
          catchError((error) => of(new FlightUpdateError({error: 'Server error while saving the flight'})))
        )
    }),
  );

  @Effect()
  updateFlightOptimistic$ = this.actions$
    .pipe(
      ofType(FlightBookingActionTypes.UpdateFlight),
      switchMap((action: UpdateFlight) =>
        concat(
          of(new FlightUpdateSuccess({newFlight: action.payload.flight})),
          this.fs
            .save(action.payload.flight)
            .pipe(
              switchMapTo(EMPTY),
              catchError((error) => {
                return of(new FlightUpdateError({error: 'Server error while saving the flight'}));
              })
            )
        )
      )
    );


  constructor(private actions$: Actions, private fs: FlightService) {}
}
