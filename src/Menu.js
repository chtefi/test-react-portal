import React from 'react';
import styles from './App.less';
import MousePosition from './MousePosition';

/**
 * Stateless component.
 * Render the main UI.
 */
export default class extends React.Component {

	static propTypes = {
		appName: React.PropTypes.string.isRequired
	}

	render() {
		return (
			<div className={styles.greenish}>
				<h1>{ this.props.appName }</h1>
				<div><MousePosition /></div>
				<div><MousePosition /></div>
				<div><MousePosition /></div>
				<div><MousePosition /></div>
			</div>
		);
	}


}
