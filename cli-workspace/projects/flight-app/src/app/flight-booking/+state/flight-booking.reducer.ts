import {Flight} from '@flight-workspace/flight-api';
import {
  FlightBookingActions,
  FlightBookingActionTypes, FlightsLoaded
} from './flight-booking.actions';

export interface State {
  flights: Flight[]
}

export const initialState: State = {
  flights: []
};

export function reducer(state = initialState, action: FlightBookingActions): State {
  switch (action.type) {

    case FlightBookingActionTypes.FlightsLoaded:
      return {
        ...state,
        flights: (action as FlightsLoaded).payload.flights
      };


    default:
      return state;
  }
}
