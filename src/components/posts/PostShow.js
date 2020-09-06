import React, { useState, useEffect } from 'react';
import { posts } from '../../axios';

const PostShow = () => {
	const [allPosts, setPosts] = useState([]);

	useEffect(() => {
		getPosts();
	});

	const getPosts = () => {
		posts
			.get('/')
			.then(res => setPosts(res.data))
			.catch(err => console.log(err));
	};

	const renderCard = post => {
		return (
			<div className='card' key={post._id}>
				<div className='card-body'>
					<p className='card-text'>Posted by {post.author}</p>
					<h5 className='card-title'>{post.title}</h5>
					<p className='card-text'>{post.body}</p>
					<a href='#' className='card-link'>
						Card link
					</a>
					<a href='#' className='card-link'>
						Another link
					</a>
				</div>
			</div>
		);
	};

	return (
		<div>
			<h1>All Posts</h1>
			{allPosts.map(renderCard)}
		</div>
	);
};

export default PostShow;
