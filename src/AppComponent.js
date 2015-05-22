import React from 'react';
import { Overlay } from 'react-overlay';
import styles from './AppComponent.less';

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
		return (
			<div className={styles.container}>
				<h1>{ this.props.appName } [counter:{ this.state.value }]</h1>
				<h2>Before portal</h2>
				<Overlay>
					<span className={styles.portal}>I'm in the portal !</span>
				</Overlay>
				<h2>After portal</h2>
			</div>
		);
	}


}
