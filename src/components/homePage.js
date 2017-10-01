// Display homepage info
// We tell browser to evaluate everything we are in doing in strict mode: he starts his files this way.
"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

// Deine React component with es5 syntax
// We put our JSX in the render function and what we define in the function will be displayed on the screen
var Home = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
				<h1>Pluralsight Administration</h1>
				<p>React, React Router, and Flux for ultra-responsive web apps.</p>
				<Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
			</div>
		);
	}
});

// 3. Export, we note Home because that's the component we defined here = homepage, so we refer to Home.
module.exports = Home;