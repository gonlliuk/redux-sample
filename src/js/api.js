import fetch from 'isomorphic-fetch'

export function getIssues(path) {
	return fetch('https://api.github.com/repos/' + path)
		.then(r => r.json())
}
