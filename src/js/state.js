import { createStore, combineReducers, applyMiddleware } from 'redux'
import promisesMiddeware from './middlewares/promises'
import * as reducers from './reducers'

const reducer = combineReducers(reducers)

const store = createStore(reducer, {
	issues: []
}, applyMiddleware(promisesMiddeware))

export default store