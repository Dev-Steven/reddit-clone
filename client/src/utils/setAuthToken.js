import axios from 'axios';
// set and delete Authorization header for axios requests
const setAuthToken = token => {
	if (token) {
		// Apply authorization token to every request if logged in
		axios.defaults.headers.common['Authorization'] = token;
	} else {
		// Delete auth header
		delete axios.defaults.headers.common['Authorization'];
	}
};

export default setAuthToken;
