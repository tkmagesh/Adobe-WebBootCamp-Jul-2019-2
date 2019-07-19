import bugApi from '../services/bugApi';

export function toggle(bugToToggleData){
	return function(dispatch, getState){
		let toggledBugData = { ...bugToToggleData, isClosed : !bugToToggleData.isClosed};
		bugApi
			.save(toggledBugData)
			.then(toggledBug => {
				let action = { type : 'UPDATE', payload : toggledBug };
				dispatch(action);
			});
		
	}
}