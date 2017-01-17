export default function(state = [], action) {
	switch (action.type) {
		case 'ISSUES_LOADED':
			return action.payload
		case 'ISSUES_LOAD_ERROR':
			return []
		case 'CLEAR_ISSUES':
			return []
		default:
			return state
	}		
}
