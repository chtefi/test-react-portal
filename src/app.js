import React from 'react';
import App from './AppComponent';

const app = <App appName="My Application Name" maxCounter={1337} />;

React.render(app, document.getElementById('app'));
