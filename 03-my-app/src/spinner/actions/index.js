const spinnerActionCreators = {
	up(delta){
		let action = { type : 'UP', payload : delta};
		return action;
	},
	down(delta){
		let action = { type : 'DOWN', payload : delta};
		return action;
	}
}

export default spinnerActionCreators;