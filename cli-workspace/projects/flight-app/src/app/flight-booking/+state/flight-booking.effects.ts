import {Injectable} from '@angular/core';
import {Flight, FlightService} from '@flight-workspace/flight-api';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {concat, EMPTY, of} from 'rxjs';
import {switchMapTo, catchError, map, switchMap} from 'rxjs/operators';
import {
  FlightBookingActionTypes,
  FlightsLoaded,
  FlightUpdateError,
  FlightUpdateSuccess,
  LoadFlights,
  UpdateFlight
} from './flight-booking.actions';

@Injectable({
  providedIn: 'root'
})
export class FlightBookingEffects {

  constructor(private actions$: Actions, private fs: FlightService) {
  }

  @Effect()
  loadFlights$ = this.actions$
    .pipe(
      ofType(FlightBookingActionTypes.LoadFlights),
      switchMap((action: LoadFlights) => {
        return this.fs
          .find(action.payload.from, action.payload.to)
          .pipe(
            map((flights: Flight[]) => new FlightsLoaded({flights: flights})),
            catchError((error) => {
              return of({error});
            })
          );
      })
    );

  // @Effect()
  updateFlight$ = this.actions$
    .pipe(
      ofType(FlightBookingActionTypes.UpdateFlight),
      switchMap((action: UpdateFlight) => {
        return this.fs
          .save(action.payload.flight)
          .pipe(
            map((flight: Flight) => {
              return new FlightUpdateSuccess({newFlight: flight})
            }),
            catchError((error) => {
              return of(new FlightUpdateError({error: 'Server error while saving the flight'}));
            })
          )
      })
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
}
