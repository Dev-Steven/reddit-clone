import React from 'react';
import { posts } from '../../axios/urls_axios';
import { withRouter } from 'react-router-dom';

import './PostCreate.scss';

const initialFormData = Object.freeze({
	title: '',
	author: '',
	body: '',
	date: '',
});

const PostCreate = props => {
	// initialize useState
	const [formData, updateFormData] = React.useState(initialFormData);

	const handleChange = e => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log(formData);
		posts
			.post('/add', formData)
			.then(function (res) {
				console.log(res);
			})
			.catch(function (err) {
				console.log(err);
			});
	};

	const toHome = path => {
		props.history.push(path);
	};

	return (
		<div className='form'>
			<form onSubmit={handleSubmit}>
				<input
					className='form-control input-custom'
					name='title'
					type='text'
					placeholder='Title'
					onChange={handleChange}
				/>
				<input
					className='form-control input-custom'
					name='author'
					type='text'
					placeholder='Your Name'
					onChange={handleChange}
				/>
				<input
					className='form-control input-custom'
					name='body'
					type='text'
					placeholder='Body'
					onChange={handleChange}
				/>
				<input
					className='form-control input-custom'
					name='date'
					type='date'
					onChange={handleChange}
				/>
				<div className='buttons'>
					<button type='submit' className='btn btn-success'>
						Post
					</button>
					<button
						className='btn btn-danger'
						onClick={() => toHome('/')}
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
};

export default withRouter(PostCreate);
