import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as issuesActions from '../actionCreators/issues'
import * as buttonsActions from '../actionCreators/buttons'

const actions = Object.assign({}, issuesActions, buttonsActions)

class App extends Component {
	constructor(props) {
		super(props);
		this.buttons = [{
			name: 'loadIssues',
			disabled: false
		}, {
			name: 'clearIssues',
			disabled: false
		}]
	}

	componentWillMount() {
		this.props.addButtons(this.buttons)
	}

	handleLoadClick() {
		this.props.loadIssues()

	}

	handleClearClick() {
		this.props.clearIssues()
	}

	isButtonDisabled(name) {
		return this.props.buttons.some(button => button.name === name && button.disabled)
	}

	render() {
		const disabled = this.props.disabled
		return <div>
			<h1>Some issues from git</h1>
			<button onClick={::this.handleLoadClick} disabled={this.isButtonDisabled('loadIssues')}>Load Issues</button>
			<button onClick={::this.handleClearClick} disabled={this.isButtonDisabled('clearIssues')}>Clear Issues</button>
			<ul>{this.props.issues.map(issue => <li key={issue.id}>{ issue.title }</li>)}</ul>
		</div>
	}
}

export default connect(
	state => ({
		issues: state.issues,
		buttons: state.buttons
	}),
	dispatch => bindActionCreators(actions, dispatch)
)(App)
