import {AppActions, AppActionTypes} from './app.actions';


export interface State {
  count:number
}

export const initialState: State = {
  count:0
};

export function reducer(state = initialState, action: AppActions): State {
  switch (action.type) {
    case AppActionTypes.CounterIncrement: {
      const newCount = state.count + action.payload.incrementBy;
      return { ...state, count: newCount }
    }
    default:
      return state;
  }
}
