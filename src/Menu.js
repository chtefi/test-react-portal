import React from 'react';
import { Overlay } from 'react-overlay';
import styles from './AppComponent.less';

/**
 * Stateless component.
 * Just render some UI.
 */
export default class App extends React.Component {

	static propTypes = {
		appName: React.PropTypes.string.isRequired,
		value: React.PropTypes.number.isRequired
	}

	constructor() {
		super();
	}

	render() {
		return (
			<div className={styles.container}>
				<h1>{ this.props.appName } [counter:{ this.props.value }]</h1>
				<h2>Before portal</h2>
				<Overlay>
					<span className={styles.portal}>I'm in the portal !</span>
				</Overlay>
				<h2>After portal</h2>
			</div>
		);
	}


}
