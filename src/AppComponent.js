import React from 'react';
import { Overlay } from 'react-overlay';
import './AppComponent.less';

const portalStyle = {
	backgroundColor: 'orange',
	width: 200,
	height: 100,
	lineHeight: '100px',
	display: 'block',
	textAlign: 'center'
};

export default class App extends React.Component {
	render() {
		return <div className="AppComponent">
				<h1>Before portal</h1>
				<Overlay>
					<span style={portalStyle}>I'm in the portal !</span>
				</Overlay>
				<h1>After portal</h1>
			</div>;
	}
}
