import fetch from 'isomorphic-fetch'

export function getIssues() {
	return fetch('https://api.github.com/repos/reactjs/react-redux/issues')
		.then(r => r.json())
}
