
let currentState = undefined,
	callbacks = [],
	reducer = null,
	init_action = '@@INIT/ACTION'
	
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

export function createStore(_reducer){
	reducer = _reducer;
	currentState = reducer(currentState, init_action);
	let store = { getState, subscribe, dispatch };
	return store;
}

export function bindActionCreators(actionCreators, dispatch){
	var actionDispatchers = {};
	for(let key in actionCreators){
		actionDispatchers[key] = function(...args){
			let action = actionCreators[key](...args);
			console.log('dispatching ', action);
			dispatch(action);
		}
	}
	return actionDispatchers;
}



let SM = { createStore, bindActionCreators };

export default SM;