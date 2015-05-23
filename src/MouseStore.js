import { EventEmitter } from 'events';

class MouseStore extends EventEmitter {

	constructor() {
		super();
		this.x = null;
		this.y = null;
	}

	getMouseX() {
		return this.x;
	}

	getMouseY() {
		return this.y;
	}

	update(x, y) {
		this.x = x;
		this.y = y;
		this.emit('update');
	}

	onUpdate(fn) {
		this.on('update', fn);
	}
}

export default new MouseStore();
