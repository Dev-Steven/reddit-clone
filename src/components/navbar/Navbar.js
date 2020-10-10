import React from 'react';
import './Navbar.scss';
import { withRouter } from 'react-router-dom';

const Navbar = props => {
	const toRoute = path => {
		props.history.push(path);
	};

	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<a className='navbar-brand' href='#'>
				Yellit
			</a>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarSupportedContent'
				aria-controls='navbarSupportedContent'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='navbar-toggler-icon'></span>
			</button>

			<div
				className='collapse navbar-collapse'
				id='navbarSupportedContent'
			>
				<ul className='navbar-nav mr-auto'>
					<li className='nav-item dropdown'>
						<a
							className='nav-link dropdown-toggle'
							href='#'
							id='navbarDropdown'
							role='button'
							data-toggle='dropdown'
							aria-haspopup='true'
							aria-expanded='false'
						>
							Home
						</a>
						<div
							className='dropdown-menu'
							aria-labelledby='navbarDropdown'
						>
							<a className='dropdown-item' href='#'>
								Home
							</a>
							<a className='dropdown-item' href='#'>
								Popular
							</a>
							<div className='dropdown-divider'></div>
							<a className='dropdown-item' href='#'>
								All
							</a>
						</div>
					</li>
				</ul>
				<form className='form-inline my-lg-0'>
					<input
						className='form-control input-length'
						type='search'
						placeholder='Search'
						aria-label='Search'
					/>
				</form>
				<ul className='navbar-nav ml-auto'>
					<li className='nav-item dropdown'>
						<a
							className='nav-link dropdown-toggle'
							href='#'
							id='navbarDropdown'
							role='button'
							data-toggle='dropdown'
							aria-haspopup='true'
							aria-expanded='false'
						>
							Username
						</a>
						<div
							className='dropdown-menu'
							aria-labelledby='navbarDropdown'
						>
							<a className='dropdown-item' href='#'>
								My Profile
							</a>
							<a className='dropdown-item' href='#'>
								Night Mode
							</a>
							<div className='dropdown-divider'></div>
							<a
								className='dropdown-item'
								onClick={() => toRoute('/signup')}
							>
								Log Out
							</a>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default withRouter(Navbar);
