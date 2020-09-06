import React from 'react';
import { withRouter } from 'react-router-dom';

import PostShow from '../posts/PostShow';
import './Home.scss';

const Home = props => {
	const toPostCreate = path => {
		props.history.push(path);
	};

	return (
		<div className='home text-center'>
			Yellit - a Reddit Clone
			<div className='input-div'>
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
						onClick={() => toPostCreate('/createpost')}
					/>
				</div>
				<PostShow />
			</div>
		</div>
	);
};

// using withRouter to have access to history.push in toPostCreate function
export default withRouter(Home);
