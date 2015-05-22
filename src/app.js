import React from 'react';
import App from './AppComponent';

React.render(
	<App
		appName="My Application Name"
		maxCounter={1337}
	/>,
	document.getElementById('app')
);
