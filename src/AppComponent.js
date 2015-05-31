import React from 'react';
import Menu from './Menu';

/**
 * Stateful component.
 * Only use to render a <Menu> component which is stateless.
 */
export default class App extends React.Component {

	static propTypes = {
		appName: React.PropTypes.string.isRequired,
		maxCounter: React.PropTypes.number.isRequired
	}

	constructor() {
		super();
		this.state = {
			value: 0
		};

		this.onMouseMove = ::this.onMouseMove;
	}

	componentDidMount() {
		this.bindEvents();
	}
	componentWillUnmount() {
		this.unbindEvents();
	}

	bindEvents() {
		document.addEventListener('mousemove', this.onMouseMove);
	}
	unbindEvents() {
		document.removeEventListener('mousemove', this.onMouseMove);
	}

	onMouseMove() {
		this.setState({ value: this.state.value + 1 });
		if (this.state.value + 1 > this.props.maxCounter) {
			this.unbindEvents();
		}
	}

	render() {
		return <Menu {...this.props} value={this.state.value} />;
	}

}
