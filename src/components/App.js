import React from 'react';
import Navbar from './navbar/Navbar';
import Home from './home/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

const App = () => {
	return (
		<div>
			<Navbar />
			<div className='container'>
				<Home />
			</div>
		</div>
	);
};

export default App;
