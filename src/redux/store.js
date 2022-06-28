import {combineReducers, createStore } from 'redux'
import { searchReducer } from './search/reducer'

const rootReducer = combineReducers({
    search: searchReducer
})


export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )