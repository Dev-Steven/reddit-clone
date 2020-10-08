import React, { useState, useEffect } from 'react';
import { posts } from '../../axios';

import './PostShow.scss';

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

	const upVotes = (id, votes) => {
		// when user clicks add 1 to total votes
		votes++;
		posts
			.post(`/vote/${id}`, { votes })
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
	};

	const downVotes = (id, votes) => {
		// when user clicks subtract 1 from total votes
		votes--;
		posts
			.post(`/vote/${id}`, { votes })
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
	};

	const renderCard = post => {
		return (
			<div className='card' key={post._id}>
				<div className='card-body'>
					<p className='card-text'>Posted by {post.author}</p>
					<h5 className='card-title'>{post.title}</h5>
					<p className='card-text'>{post.body}</p>
					<div>
						<p>{post.votes}</p>
						<button
							className='btn btn-primary buttons'
							onClick={() => upVotes(post._id, post.votes)}
						>
							Upvote
						</button>
						<button
							className='btn btn-danger buttons'
							onClick={() => downVotes(post._id, post.votes)}
						>
							Downvote
						</button>
					</div>
					<a href=''>Comments</a>
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
