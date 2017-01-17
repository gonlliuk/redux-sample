import { getIssues } from '../api' 
import * as issuesActions from '../actions/issues'
import * as buttonActions from '../actions/buttons'


export function loadIssues(buttons = []) {  
	return function(dispatch) {
		dispatch(buttonActions.disable(buttons))
		return getIssues().then(
			data => {
				dispatch(issuesActions.loaded(data))
				dispatch(buttonActions.enable(buttons))
			}
		)
	}
}

export function clearIssues() {  
	return function(dispatch) {
		dispatch(issuesActions.clear())
	}
}
