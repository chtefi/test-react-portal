import React from 'react';
import AppComponent from './AppComponent';

const app = <AppComponent appName="My Application Name" maxCounter={1337} />;

React.render(app, document.getElementById('app'));
