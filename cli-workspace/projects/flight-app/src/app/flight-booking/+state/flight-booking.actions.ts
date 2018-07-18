import { Action } from '@ngrx/store';
import {Flight} from '@flight-workspace/flight-api';

export enum FlightBookingActionTypes {
  LoadFlights = '[FlightBooking] Load Flights',
  FlightsLoaded = '[FlightBooking] Flights Loaded',
}

export class LoadFlights implements Action {
  readonly type = FlightBookingActionTypes.LoadFlights;
  constructor(public payload: { from: string, to: string }) {}
}

export class FlightsLoaded implements Action {
  readonly type = FlightBookingActionTypes.FlightsLoaded;
  constructor(public payload: { flights: Flight[]}) {}
}

export type FlightBookingActions = LoadFlights | FlightsLoaded;
