import { createStore, combineReducers, applyMiddleware } from 'redux'
import promisesMiddeware from './middlewares/promises'
import logger from'redux-logger'
import thunk from 'redux-thunk';
import * as reducers from './reducers'

const reducer = combineReducers(reducers)

const store = createStore(reducer, {
	issues: [],
	buttons: []
}, applyMiddleware.apply(this, [promisesMiddeware, logger(), thunk]))

export default store
