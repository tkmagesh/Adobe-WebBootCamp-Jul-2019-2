import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import bugsReducer from '../bugTracker/reducer';
import { calculatorReducer } from '../calculator';

const rootReducer = combineReducers({
	bugsState : bugsReducer,
	calculatorState : calculatorReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;