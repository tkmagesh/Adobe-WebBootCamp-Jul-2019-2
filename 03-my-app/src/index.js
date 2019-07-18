import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { bindActionCreators } from './stateManager/SM';
import store from './store';
import spinnerActionCreators from './spinner/actions';
import Spinner from './spinner';

//window['store'] = store;

let actionDispatchers = bindActionCreators(spinnerActionCreators, store.dispatch);

function renderApp(){
	let spinnerValue = store.getState();
	ReactDOM.render(<Spinner value={spinnerValue} actionDispatchers={actionDispatchers}/>, 
		document.getElementById('root'));
}

renderApp();
store.subscribe(renderApp);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
