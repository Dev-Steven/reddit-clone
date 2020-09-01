import React from 'react';

const PostCreate = () => {
	return (
		<div className='input-group my-3 mb-3'>
			<div className='input-group-prepend'>
				<span className='input-group-text' id='basic-addon1'>
					Post
				</span>
			</div>
			<input
				type='text'
				className='form-control'
				placeholder='Create a post'
				aria-label='Username'
				aria-describedby='basic-addon1'
			/>
		</div>
	);
};

export default PostCreate;
