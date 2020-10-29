import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component {
	render() {
		return (
			<div className='navbar-fixed'>
				<nav className='z-depth-0'>
					<div className='nav-wrapper white'>
						<Link
							to='/'
							style={{
								fontFamily: 'monospace',
							}}
							className='col s5 brand-logo center black-text'
						>
							<i
								style={{ color: 'rgb(255, 69, 0)' }}
								className='material-icons'
							>
								face
							</i>
							Seddit
						</Link>
					</div>
				</nav>
			</div>
		);
	}
}
export default Navbar;
