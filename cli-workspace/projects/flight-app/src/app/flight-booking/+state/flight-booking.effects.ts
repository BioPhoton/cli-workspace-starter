import {Injectable} from '@angular/core';
import {Flight, FlightService} from '@flight-workspace/flight-api';
import {Actions, Effect} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {
  FlightBookingActionTypes,
  FlightsLoaded,
  LoadFlights
} from './flight-booking.actions';

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
            catchError((error) => {return error;})
          );
      })
    );

}
