import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as issuesActions from '../actionCreators/issues'
import { buttonsActions } from '../actionCreators/buttons'

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
		this.state = { repo: '' }
	}

	componentWillMount() {
		this.props.add(this.buttons)
	}

	handleLoadClick() {
		this.props.disable( ['loadIssues', 'clearIssues'] )
		this.props.loadIssues(this.state.repo)
			.then(data => {
				this.props.enable( ['loadIssues', 'clearIssues'] )
			})

	}

	handleClearClick() {
		this.props.clearIssues()
	}

	handeInputChange(e) {
		this.setState({ repo: e.target.value })
	}

	isButtonDisabled(name) {
		return this.props.buttons.some(button => button.name === name && button.disabled)
	}

	render() {
		return <div>
			<h1>Some issues from git</h1>
			<div>
				<span>{ 'https://github.com/' }</span>
				<input value={this.state.repo} onChange={::this.handeInputChange}/>
			</div>
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
