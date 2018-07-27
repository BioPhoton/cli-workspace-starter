import { Action } from '@ngrx/store';
import {
  FlightBookingActions, FlightBookingActionTypes,
  FlightUpdateSuccess
} from './flight-booking.actions';
import {Flight} from '@flight-workspace/flight-api';

export interface State {
  flights: Flight[],
  isFlightsPending: boolean
}

export const initialState: State = {
  flights: [],
  isFlightsPending: false
};

export function reducer(state = initialState, action: FlightBookingActions): State {
  switch (action.type) {

    case FlightBookingActionTypes.LoadFlights:
      return {
        ...state,
        isFlightsPending: true
      };

    case FlightBookingActionTypes.FlightsLoadedSuccess:
      return {
        ...state,
        flights: action.payload.flights,
        isFlightsPending: false
      };

    case FlightBookingActionTypes.FlightsLoadedError:
      return {
        ...state,
        isFlightsPending: false
      };

    case FlightBookingActionTypes.FlightUpdateSuccess:
      const a = action;
      const newFlight = a.payload.newFlight;
      const newFlights = state.flights
        .map(f => (f.id == newFlight.id) ? {...newFlight} : f);

      return {
        ...state,
        flights: newFlights
      };

    default:
      return state;
  }
}
