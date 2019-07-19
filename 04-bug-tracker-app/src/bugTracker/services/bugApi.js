import axios from 'axios';

const serviceEndPoint = 'http://localhost:3030/bugs';

function load(){
	return axios
		.get(serviceEndPoint)
		.then(response => response.data)
}

const bugApi = { 
	load
}

export default bugApi;