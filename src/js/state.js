import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from'redux-logger'
import thunk from 'redux-thunk';
import * as reducers from './reducers'

const reducer = combineReducers(reducers)

const store = createStore(reducer, {
	issues: [],
	buttons: []
}, applyMiddleware.apply(this, [logger(), thunk]))

export default store
