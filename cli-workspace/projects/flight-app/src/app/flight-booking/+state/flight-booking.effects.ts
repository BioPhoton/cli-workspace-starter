import {Injectable} from '@angular/core';
import {Flight, FlightService} from '@flight-workspace/flight-api';
import {Actions, Effect} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {
  FlightBookingActionTypes,
  FlightsLoaded, FlightUpdateError, FlightUpdateSuccess,
  LoadFlights, UpdateFlight
} from './flight-booking.actions';
import {of} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class FlightBookingEffects {

  constructor(private actions$: Actions, private fs: FlightService) {
  }

  @Effect()
  loadFlights$ = this.actions$.ofType(FlightBookingActionTypes.LoadFlights)
    .pipe(
      switchMap((action: LoadFlights) => {
        return this.fs
          .find(action.payload.from, action.payload.to)
          .pipe(
            map((flights: Flight[]) => new FlightsLoaded({flights: flights})),
            catchError((error) => {return of({error});})
          );
      })
    );

  @Effect()
  updateFlight$ = this.actions$.ofType(FlightBookingActionTypes.UpdateFlight)
    .pipe(
      switchMap((action: UpdateFlight) => {
        return this.fs
          .save(action.payload.flight)
          .pipe(
            map((flight: Flight) => {
              return new FlightUpdateSuccess({newFlight: flight})
            }),
            catchError((error) => {
              return of(new FlightUpdateError({error}));
            })
          )
      })
    )
}
