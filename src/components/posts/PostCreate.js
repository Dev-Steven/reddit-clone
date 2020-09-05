import React from 'react';

const PostCreate = () => {
	return (
		<div>
			<input type='text' placeholder='Title' />
			<input type='text' placeholder='Text(optional)' />
			<button>Cancel</button>
			<button>Post</button>
		</div>
	);
};

export default PostCreate;
