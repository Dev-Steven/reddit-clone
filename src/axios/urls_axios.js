import axios from 'axios';

export const users = axios.create({
	baseUrl: 'http://localhost:5000/users',
});

export const posts = axios.create({
	baseURL: 'http://localhost:5000/posts',
});
