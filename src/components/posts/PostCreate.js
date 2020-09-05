import React from 'react';
import './PostCreate.scss';

const PostCreate = () => {
	return (
		<div className='form'>
			<form action=''>
				<input
					className='form-control input-custom'
					type='text'
					placeholder='Title'
				/>
				<input
					className='form-control input-custom'
					type='text'
					placeholder='Your Name'
				/>
				<input
					className='form-control input-custom'
					type='text'
					placeholder='Body'
				/>
				<input className='form-control input-custom' type='date' />
				<div className='buttons'>
					<button className='btn btn-success'>Post</button>
					<button className='btn btn-danger'>Cancel</button>
				</div>
			</form>
		</div>
	);
};

export default PostCreate;
