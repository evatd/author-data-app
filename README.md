# Building Applications with React and Flux on Pluralsight
Final version of demo app for [Building Applications with React and Flux on Pluralsight](https://app.pluralsight.com/library/courses/react-flux-building-applications/table-of-contents) with my notes.

This application uses the following technologies:
React
React Router
Flux
Node
Gulp
Browserify
Bootstrap


ES5 is used in this course - hence the syntax in this app.

Notes re state/props - making dynamic apps.
Authorlist (the child) will receive data from authorpage.js so no need for the API. Will receive dara via this.props.authors.map (data is transferred from the parent / controller view via props = immutable, cannot be changed) We have a render function, module export authorList (as components siloed).

in the parent component - import the child component like authorlist. in render add a call to authorlist component and pass this authorlist component the list that sits within the state (see the setinitialstate section = defined here).

So, parent component: imports child component, a call to the child in render, and passing data to the child via this.state.

Child component: import the parent, in return, receive the data from the parent via this.props.authors via map. and export the child component.
