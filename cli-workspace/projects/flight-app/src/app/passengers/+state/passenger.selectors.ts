import * as fromPassenger from './passenger.reducer';
import { createSelector } from '@ngrx/store';

// Parent node pointing to passenger state
export class PassengerState {
  passenger: fromPassenger.State;
}

// Selector pointing to passenger state in store
const base = (s:PassengerState) => s.passenger;

// Selector pointing to all passenger entities
export const selectAllPassengers = createSelector(base, fromPassenger.selectAll);
