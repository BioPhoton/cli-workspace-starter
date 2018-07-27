import {Flight} from '@flight-workspace/flight-api';
import {Action} from '@ngrx/store';

export enum FlightBookingActionTypes {
  LoadFlights = '[FlightBooking] Load Flights',
  FlightsLoadedSuccess = '[FlightBooking] Flights Loaded',
  UpdateFlight = '[FlightBooking] Update Flight',
  FlightUpdateSuccess = '[FlightBooking] Flight Update Success',
  FlightUpdateError = '[FlightBooking] Flights Update Error',
}

export class LoadFlights implements Action {
  readonly type = FlightBookingActionTypes.LoadFlights;

  constructor(public payload: { from: string, to: string }) {
  }
}

export class FlightsLoadedSuccess implements Action {
  readonly type = FlightBookingActionTypes.FlightsLoadedSuccess;

  constructor(public payload: { flights: Flight[] }) {
  }
}

export class FlightsLoadedError implements Action {
  readonly type = FlightBookingActionTypes.FlightsLoadedError;
  constructor(public payload: { error?: any}) {}
}


/////

export class UpdateFlight implements Action {
  readonly type = FlightBookingActionTypes.UpdateFlight;

  constructor(public payload: { flight: Flight }) {
  }
}

export class FlightUpdateSuccess implements Action {
  readonly type = FlightBookingActionTypes.FlightUpdateSuccess;

  constructor(public payload: { newFlight: Flight }) {
  }
}

export class FlightUpdateError implements Action {
  readonly type = FlightBookingActionTypes.FlightUpdateError;

  constructor(public payload: { error?: any }) {
  }
}


export type FlightBookingActions = LoadFlights | FlightsLoadedSuccess | FlightsLoadedError | UpdateFlight | FlightUpdateSuccess | FlightUpdateError;
