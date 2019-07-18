import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { bindActionCreators } from 'redux';
import store from './store';
import spinnerActionCreators from './spinner/actions';
import { calculatorActionCreators } from './calculator';

import Spinner from './spinner';
import Calculator from './calculator';

//window['store'] = store;

let spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, store.dispatch);
let calculatorActionDispatchers = bindActionCreators(calculatorActionCreators, store.dispatch);

function renderApp(){
	let storeState = store.getState();
	let spinnerValue = storeState.spinnerState;
	let calculatorValue = storeState.calculatorState;

	ReactDOM.render(
		<div>
			<Spinner value={spinnerValue} {...spinnerActionDispatchers} />
			<hr/>
			<Calculator result={calculatorValue} {...calculatorActionDispatchers} />
		</div>, 
		document.getElementById('root'));
}

renderApp();
store.subscribe(renderApp);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
