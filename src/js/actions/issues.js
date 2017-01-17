export function clear() {
	return {
			type: 'CLEAR_ISSUES'
		}
}

export function load() {
	return {
			type: 'LOAD_ISSUES'
		}
}

export function loaded(data) {
	return {
			type: 'ISSUES_LOADED',
			payload: data
		}
}

export function error() {
	return {
			type: 'ISSUES_LOAD_ERROR'
		}
}