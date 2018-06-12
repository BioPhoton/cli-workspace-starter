import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { FlightBookingActions, FlightBookingActionTypes } from './flight-booking.actions';

@Injectable({
  providedIn: 'root'
})
export class FlightBookingEffects {

  @Effect()
  effect$ = this.actions$.ofType(FlightBookingActionTypes.LoadFlightBookings);

  constructor(private actions$: Actions) {}
}
