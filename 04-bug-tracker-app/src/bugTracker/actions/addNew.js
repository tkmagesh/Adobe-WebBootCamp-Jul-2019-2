import bugApi from '../services/bugApi';

export function addNew(newBugName){
	return function(dispatch, getState){
		let newBugData = { 
			id : 0,
			name : newBugName,
			isClosed : false,
			createdAt : new Date()
		};
		bugApi
			.save(newBugData)
			.then(function(newBug){
				let action = { type : 'ADD_NEW', payload : newBug };
				dispatch(action);
			});
	};
	
}