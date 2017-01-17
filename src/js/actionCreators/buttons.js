export function disableButtons(buttonNames) {
	return {
		type: 'DISABLE_BUTTONS',
		payload: buttonNames
	}
}

export function enableButtons(buttonNames) {
	return {
		type: 'ENABLE_BUTTONS',
		payload: buttonNames
	}
}

export function addButtons(buttons) {
	return {
		type: 'ADD_BUTTONS',
		payload: buttons
	}
}