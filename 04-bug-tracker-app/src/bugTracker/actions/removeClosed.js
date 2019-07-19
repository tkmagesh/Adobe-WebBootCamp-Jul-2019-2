import bugApi from '../services/bugApi';

export function removeClosed(){
	//find the closed bugs
	return function(dispatch, getState){
		let bugs = getState().bugsState,
			closedBugs = bugs.filter(bug => bug.isClosed);

		closedBugs
			.forEach(closedBug => {
				bugApi
					.remove(closedBug)
					.then(() => {
						let action = { type : 'REMOVE', payload : closedBug};
						dispatch(action);		
					});
			});
	}
}