import React from 'react';
import { Overlay } from 'react-overlay';
import styles from './AppComponent.less';

export default class App extends React.Component {

	static propTypes = {
		appName: React.PropTypes.any,
		bal: React.PropTypes.boolean.isRequired
	}

	constructor() {
		this.state = {
			foo: 1
		};
	}

	componentDidMount() {
		this.setState({ foo: 2 });
	}


	componentDidUpdate() {
		this.setState({ foo: 2 });
	}


	render() {
		return (
			<div className={styles.container}>
				<h1>{ this.props.appName } { this.state.foo }</h1>
				<h2>Before portal</h2>
				<Overlay>
					<span style={styles.portal}>I'm in the portal !</span>
				</Overlay>
				<h2>After portal</h2>
			</div>
		);
	}


}
