import { Action } from '@ngrx/store';


export interface State {
  count:number
}

export const initialState: State = {
  count:0
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state;
  }
}
