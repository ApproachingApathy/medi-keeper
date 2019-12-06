import { compose, createStore } from 'redux'
import * as local from './localStorage'
import rootReducer from './combined-reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, local.loadState(), composeEnhancers())

store.subscribe(() => {
    local.saveState({medicationList:{list:store.getState().medicationList.list}})
})