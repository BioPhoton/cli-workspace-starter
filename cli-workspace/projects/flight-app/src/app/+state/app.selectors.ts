import {createSelector} from '@ngrx/store';
import {State as StoreState} from './index';
import {State as AppState} from './app.reducer';

// Selectors are our DB queries

export function getAppState(s: StoreState): AppState {
  return s.app
}

export const getCount = createSelector(
  getAppState,
  (state: AppState) => state.count
)
