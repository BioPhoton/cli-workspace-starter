import {createFeatureSelector, createSelector} from '@ngrx/store';
import {State as FlightBooking} from './flight-booking.reducer';

export const getFlightBookingState = createFeatureSelector<FlightBooking>('flightBooking');

export const getFlights = createSelector(
  getFlightBookingState,
  (state: FlightBooking) => state.flights
)
