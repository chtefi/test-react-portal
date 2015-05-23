import React from 'react';
import styles from './AppComponent.less';
import MousePosition from './MousePosition';

/**
 * Stateless component.
 * Render the main UI.
 */
export default class App extends React.Component {

	static propTypes = {
		appName: React.PropTypes.string.isRequired
	}

	render() {
		return (
			<div className={styles.container}>
				<h1>{ this.props.appName }</h1>
				<div><MousePosition /></div>
				<div><MousePosition /></div>
				<div><MousePosition /></div>
			</div>
		);
	}


}
