import { Action } from '@ngrx/store';
import {Flight} from '@flight-workspace/flight-api';

export const FlightBookingActionTypes = {
  LoadFlights : '[FlightBooking] Load Flighs',
  FlightsLoaded : '[FlightBooking] Flighs Loaded'
}

export class LoadFlights implements Action {
  readonly type = FlightBookingActionTypes.LoadFlights;
  constructor(public payload: { from: string, to: string, delayed?: boolean }) {}
}

export class FlightsLoaded implements Action {
  readonly type = FlightBookingActionTypes.FlightsLoaded;
  constructor(public payload: { flights: Flight[]}) {}
}
export type FlightBookingActions = LoadFlights | FlightsLoaded;
