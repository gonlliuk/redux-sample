export default function(state = [], action) {
	switch (action.type) {
		case 'ISSUES_LOADED':
			return action.data
		case 'CLEAR_ISSUES':
			return []
		default:
			return state
	}		
}
