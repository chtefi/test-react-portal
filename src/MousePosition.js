import React from 'react';
import MouseStore from './MouseStore.js';

/**
 * Render a bit of UI with the mouse position.
 * Depends on the MouseStore.
 */
export default class extends React.Component {

	componentDidMount() {
		MouseStore.onUpdate(::this.forceUpdate);
	}

	render() {
		return (
			<span>
				position (
					{ MouseStore.getMouseX() },
					{ MouseStore.getMouseY() }
				)
			</span>
		);
	}

}
