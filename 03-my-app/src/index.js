import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';

import store from './store';

import Spinner from './spinner';
import Calculator from './calculator';
	
ReactDOM.render(
	<Provider store={store}>
		<div>
			<Spinner/>
			<hr/>
			<Calculator/>
		</div>
	</Provider>, 
	document.getElementById('root'));
