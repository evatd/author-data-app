// Our entry point for the application
"use strict";

var React = require('react');
var ReactDom = require('react-dom');
var routes = require('./routes');
var InitializeActions = require('./actions/initializeActions');

InitializeActions.initApp();

ReactDom.render(routes, document.getElementById('app'));

// React render takes 2 arguments - 1. the component we want to display (routes=will display our app), 2. the dom element we'd like to attach the app to (i.e. 'app')
// We want to display our application within div id='app' from index.html (i.e. <div id="app"></div>)
