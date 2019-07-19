
export function addNew(newBugName){
	let newBug = { 
		id : 0,
		name : newBugName,
		isClosed : false,
		createdAt : new Date()
	};
	let action = { type : 'ADD_NEW', payload : newBug };
	return action;
}