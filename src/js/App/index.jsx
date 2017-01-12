import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadIssues } from '../actionCreators/issues'

class App extends Component {
	handleClick() {
		this.props.loadIssues()
	}

	render() {
		return <div>
			<h1>Some issues from git</h1>
			<button onClick={::this.handleClick}>Load Issues</button>
			<ul>{this.props.issues.map(issue => <li key={issue.id}>{ issue.title }</li>)}</ul>
		</div>
	}
}

export default connect(
	state => ({ issues: state.issues}),
	dispatch => bindActionCreators({ loadIssues }, dispatch)
)(App)
