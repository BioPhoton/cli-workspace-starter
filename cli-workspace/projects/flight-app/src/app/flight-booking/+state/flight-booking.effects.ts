import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  FlightBookingActions, FlightBookingActionTypes, FlightsLoaded,
  LoadFlights
} from './flight-booking.actions';
import {switchMap, catchError, map} from 'rxjs/operators';
import {Flight, FlightService} from '@flight-workspace/flight-api';

@Injectable()
export class FlightBookingEffects {

  @Effect()
  effect$ = this.actions$.pipe(
    ofType(FlightBookingActionTypes.LoadFlights),
    switchMap((action: LoadFlights) => {
      return this.fs
        .find(action.payload.from, action.payload.to)
        .pipe(
          map((flights: Flight[]) => new FlightsLoaded({flights: flights})),
          catchError((error) => {return error;})
        );

    }));

  constructor(private actions$: Actions, private fs: FlightService) {}
}
