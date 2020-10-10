import React from 'react';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import PostCreate from './posts/PostCreate';
import SignUp from './login/signUp';
import { BrowserRouter, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Navbar />
				<div className='container'>
					<Switch>
						<Home exact path='/' />
						<PostCreate path='/createpost' />
						<SignUp path='/signup' />
					</Switch>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
