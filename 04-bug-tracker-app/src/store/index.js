import { createStore, combineReducers } from 'redux';

import bugsReducer from '../bugTracker/reducer';

const rootReducer = combineReducers({
	bugsState : bugsReducer
});

const store = createStore(rootReducer);

export default store;