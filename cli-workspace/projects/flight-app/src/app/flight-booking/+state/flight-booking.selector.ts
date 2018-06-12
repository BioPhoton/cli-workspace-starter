import {State as FlightBooking} from './flight-booking.reducer';
import {createSelector} from '@ngrx/store';

export function getFlightBookingState(state: any): FlightBooking {
  return state.flightBooking
}

export const getFlights = createSelector(
  getFlightBookingState,
  (state: FlightBooking) => state.flights
)