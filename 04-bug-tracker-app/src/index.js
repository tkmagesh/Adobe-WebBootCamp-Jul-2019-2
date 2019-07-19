import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BugTracker from './bugTracker';
import appStore from './store';
import { Provider } from 'react-redux';
import Calculator from './calculator';

import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}


ReactDOM.render(
		<Provider store={appStore}>
			<div>
				<Router>
			      <div>
			      	<span> <Link to="/">Home</Link> </span>
			      	<span> <Link to="/about/">About</Link> </span>
			      	<span> <Link to="/users/">Users</Link> </span> 
			      	<span> <Link to="/bugs/">Bug Tracker</Link> </span> 
			      	<span> <Link to="/calculator/">Calculator</Link> </span> 
			        

			        <Route path="/" exact component={Index} />
			        <Route path="/about/" component={About} />
			        <Route path="/users/" component={Users} />
			        <Route path="/bugs/" component={BugTracker} />
			        <Route path="/calculator/" component={Calculator} />
			      </div>
			    </Router>
			</div>
		</Provider>
		, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
