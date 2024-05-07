import { CountReducer } from "./Reducer";
import { createStore } from 'redux'

export const Store = createStore(CountReducer)