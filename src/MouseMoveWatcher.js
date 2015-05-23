import React from 'react';
import MouseStore from './MouseStore.js';

export default class MouseMoveWatcher extends React.Component {

	constructor() {
		super();
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

	onMouseMove(e) {
		MouseStore.update(e.clientX, e.clientY);
	}

	render() {
		return this.props.children;
	}

}
