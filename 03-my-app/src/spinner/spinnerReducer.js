function spinnerReducer(currentState = 0, action){
	if (action.type === 'UP') return ++currentState;
	if (action.type === 'DOWN') return --currentState;
	return currentState;
}

export default spinnerReducer;