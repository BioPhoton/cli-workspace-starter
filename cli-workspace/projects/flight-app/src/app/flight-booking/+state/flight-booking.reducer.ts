import {Flight} from '@flight-workspace/flight-api';
import {
  FlightBookingActions,
  FlightBookingActionTypes, FlightsLoaded, FlightUpdateSuccess
} from './flight-booking.actions';

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

    case FlightBookingActionTypes.FlightsLoaded:
      return {
        ...state,
        flights: (action as FlightsLoaded).payload.flights,
        isFlightsPending: false
      };

    case FlightBookingActionTypes.FlightsLoadedError:
      return {
        ...state,
        isFlightsPending: false
      };

    case FlightBookingActionTypes.FlightUpdateSuccess:
      const a = action as FlightUpdateSuccess;
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
