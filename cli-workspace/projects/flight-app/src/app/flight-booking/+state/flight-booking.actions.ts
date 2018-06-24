import { Action } from '@ngrx/store';
import {Flight} from '@flight-workspace/flight-api';

export const FlightBookingActionTypes = {
  LoadFlights : '[FlightBooking] Load Flights',
  FlightsLoaded : '[FlightBooking] Flights Loaded',
  FlightsLoadedError: '[FlightBooking] Flights Loaded Error',
  UpdateFlight : '[FlightBooking] Update Flight',
  FlightUpdateSuccess : '[FlightBooking] Flight Update Success',
  FlightUpdateError: '[FlightBooking] Flight Update Error'
}

export class LoadFlights implements Action {
  readonly type = FlightBookingActionTypes.LoadFlights;
  constructor(public payload: { from: string, to: string, delayed?: boolean }) {}
}

export class FlightsLoaded implements Action {
  readonly type = FlightBookingActionTypes.FlightsLoaded;
  constructor(public payload: { flights: Flight[]}) {}
}

export class FlightsLoadedError implements Action {
  readonly type = FlightBookingActionTypes.FlightsLoadedError;
  constructor(public payload: { error?: any}) {}
}

export class UpdateFlight implements Action {
  readonly type = FlightBookingActionTypes.UpdateFlight;
  constructor(public payload: { flight: Flight}) {}
}

export class FlightUpdateSuccess implements Action {
  readonly type = FlightBookingActionTypes.FlightUpdateSuccess;
  constructor(public payload: { newFlight: Flight}) {}
}

export class FlightUpdateError implements Action {
  readonly type = FlightBookingActionTypes.FlightUpdateError;
  constructor(public payload: { error?: any}) {}
}

export type FlightBookingActions = LoadFlights | FlightsLoaded | FlightsLoadedError | UpdateFlight | FlightUpdateSuccess | FlightUpdateError;
