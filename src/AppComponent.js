import React from 'react';
import Menu from './Menu';
import MouseMoveWatcher from './MouseMoveWatcher';

/**
 * Renders the Menu and watch the mouse moves.
 * Stateless component. 
 */
export default class extends React.Component {

	static propTypes = {
		appName: React.PropTypes.string.isRequired
	}

	render() {
		return (
			<MouseMoveWatcher>
				<Menu appName={this.props.appName} />
			</MouseMoveWatcher>
		);
	}

}
