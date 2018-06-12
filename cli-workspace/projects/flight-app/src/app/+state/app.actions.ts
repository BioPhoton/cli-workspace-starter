import { Action } from '@ngrx/store';

export const AppActionTypes = {
  CounterIncrement : '[App] Counter Increment'
}

export class CounterIncrementAction implements Action {
  readonly type = AppActionTypes.CounterIncrement;
  constructor(public payload: { incrementBy: number }){
  }
}

export type AppActions = CounterIncrementAction;
