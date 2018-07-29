import { Middleware, Store as ReduxStore, applyMiddleware, createStore } from "redux"
import { ipcMain, ipcRenderer } from "electron"
import { Action, State, initialState, reducers } from "./modules"

export type Store = ReduxStore<State, Action>

const forwardToRenderer: Middleware<{}, State> = store => next => (action) => {

}

export const createStoreMain = (state: State) => {
  return createStore(reducers)
}

export const replayActionMain = (store: Store) => {
  ipcMain.on("redux-action", (event: string, payload: any) => {
    console.log(JSON.stringify(payload))
    store.dispatch(payload)
  })
}

const forwardToMain: Middleware<{}, State> = store => next => (action) => {
  ipcRenderer.send("redux-action", action)
}

export const createStoreRenderer = () => {
  return createStore(reducers, applyMiddleware(forwardToMain))
}

export const replayActionRenderer = (store: Store) => {

}
