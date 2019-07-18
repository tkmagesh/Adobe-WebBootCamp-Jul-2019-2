import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import bugsReducer from '../bugTracker/reducer';

const rootReducer = combineReducers({
	bugsState : bugsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;