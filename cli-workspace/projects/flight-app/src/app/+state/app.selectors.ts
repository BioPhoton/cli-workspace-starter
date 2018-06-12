import {createSelector} from '@ngrx/store';
import {State as AppState} from './index';
import {State as App} from './app.reducer';

// Selectors are our DB queries

export function getAppState(state: AppState): App {
  return state.app
}

export const getCount = createSelector(
  getAppState,
  (state: App) => state.count
)
