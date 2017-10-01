# Building Applications with React and Flux on Pluralsight
Final version of demo app for [Building Applications with React and Flux on Pluralsight](https://app.pluralsight.com/library/courses/react-flux-building-applications/table-of-contents) 

This is a demo created by the course organiser. Uploaded this app because of my notes.

ES5 is used in this course. This application uses the following technologies:
React
React Router
Flux
Node
Gulp
Browserify
Bootstrap

Prioritised the ES6 version of this app.

# To get started:

Install NodeJS
Download this repo
Open the command line of your choice and cd to the root directory of this repo on your machine
npm install - Installs packages
npm install -g gulp - Installs gulp globally. Why globlly?
gulp - Builds the project and opens your browser. Check here if you have issues.
Navigate to http://localhost:9005/ if your browser doesn't open automatically.

# Notes re state/props which make apps dynamic (simplified)

In the child component - Authorlist (the child) will receive data from authorpage.js so no need for the API. Authorlist will receive data via this.props.authors.map (data is transferred from the parent / controller view via props = immutable, cannot be changed). We have a render function, module export authorList (as components siloed).

In the parent component - Import the child component like Authorlist. In render, add a call to the Authorlist component and pass this Authorlist component the list that sits within the state (see the setinitialstate section = defined here).

So, re the parent component: imports a child component; incl. a call to the child in render, and pass data to the child via this.state.

So, the child component: import the parent component; in return, receive the data from the parent via this.props.authors via map; export the child component.
