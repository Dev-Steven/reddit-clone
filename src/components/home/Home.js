import React from 'react';
import PostCreate from '../posts/PostCreate';

import './Home.scss';

const Home = () => {
	return (
		<div className='home text-center'>
			Yellit - a Reddit Clone
			<PostCreate />
		</div>
	);
};

export default Home;
