export function disable(buttonNames) {
	return {
		type: 'DISABLE_BUTTONS',
		payload: buttonNames
	}
}

export function enable(buttonNames) {
	return {
		type: 'ENABLE_BUTTONS',
		payload: buttonNames
	}
}

export function add(buttons) {
	return {
		type: 'ADD_BUTTONS',
		payload: buttons
	}
}