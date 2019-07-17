
let currentState = undefined,
	callbacks = [],
	reducer = null;
	
function getState(){
	return currentState;
}

function subscribe(callback){
	callbacks.push(callback);
}

function notifyChange(){
	callbacks.forEach(callback => callback());
}

function dispatch(action){
	let newState = reducer(currentState, action);
	if (newState === currentState) return;
	currentState = newState;
	notifyChange();
}

function createStore(_reducer){
	reducer = _reducer;
	let store = { getState, subscribe, dispatch };
	return store;
}

let SM = { createStore };

export default SM;