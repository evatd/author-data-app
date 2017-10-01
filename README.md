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

In the child component - authorList (the child) will receive data from authorPage.js (the parent/controller view) so no need for the API. AuthorList will receive data via this.props.authors.map (data is transferred from the parent / controller view via props = immutable, cannot be changed) in the render function. Export authorList (as components are siloed from one another).

In the parent component - Import child components like authorList. In render, add a call to the authorList component and pass this authorList component the list that sits within the state (see the setInitialState section = list/data defined there).

So, in the parent component: import a child component; incl. a call to the child in render, and pass data to the child via this.state.

So, in the child component: import the parent component; in return, receive the data from the parent via this.props.authors via map in your render function; export the child component.
