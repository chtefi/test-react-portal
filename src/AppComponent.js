import React from 'react';
import { Overlay } from 'react-overlay';

export default class App extends React.Component {
	render() {
		return <div>
					<h1>Before portal</h1>
					<Overlay>
						<span style={{backgroundColor: 'orange', width: 200, height: 100, lineHeight: '100px', display: 'block', textAlign: 'center'}}>I'm in the portal !</span>
					</Overlay>
					<h1>After portal</h1>
				</div>;
	}
}