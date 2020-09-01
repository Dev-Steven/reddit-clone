import React from 'react';
import Navbar from './navbar/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

const App = () => {
	return (
		<div>
			<Navbar />
			<div className='container'>Reddit Clone</div>
		</div>
	);
};

export default App;
