import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store from './store';
import { spinnerActionCreators } from './spinner';
import Spinner from './spinner';

//window['store'] = store;

function renderApp(){
	let spinnerValue = store.getState();
	ReactDOM.render(<Spinner value={spinnerValue} dispatch={store.dispatch} actionCreators={spinnerActionCreators}/>, document.getElementById('root'));
}

renderApp();
store.subscribe(renderApp);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
