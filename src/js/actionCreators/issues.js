import { getIssues } from '../api' 
import * as issuesActions from '../actions/issues'


export function loadIssues(repo) {  
	return function(dispatch) {
		return getIssues(repo)
		.then(data => {
			if (data.hasOwnProperty('message')) {
				dispatch(issuesActions.error())
			} else {
				dispatch(issuesActions.loaded(data))
			}
		})
	}
}

export function clearIssues() {  
	return function(dispatch) {
		dispatch(issuesActions.clear())
	}
}
