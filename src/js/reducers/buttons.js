const helper = (state, action, newButton) => {
	let newState = state;
	action.payload && action.payload.forEach(name => {
		let button = newState.find(button => button.name === name)
		if (button) {
			button = Object.assign({}, button, newButton)
			newState = newState.filter(item => item.name !== name)
			newState.push(button)
		}
	})

	return newState
}

export default function(state = [], action) {
	switch (action.type) {
		case 'DISABLE_BUTTONS':
			return helper(state, action, { disabled : true })
		case 'ENABLE_BUTTONS':
			return helper(state, action, { disabled : false })
		case 'ADD_BUTTONS':
			return [...state, ...action.payload]
		default:
			return state
	}
}
