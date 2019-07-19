import bugApi from '../services/bugApi';

export function load(){
	return function(dispatch, getState){
		bugApi
			.load()
			.then(bugs => {
				var action = { type : 'LOAD', payload : bugs};
				dispatch(action);
			});
	}
}

