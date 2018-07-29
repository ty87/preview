import { Action as ReduxAction } from "redux"

export interface State {

}

export const initialState: State = {

}

export interface Action extends ReduxAction {
  type: string;
  payload: {};
}

export const reducers = (state = initialState, action: Action): State => {
  return state
}