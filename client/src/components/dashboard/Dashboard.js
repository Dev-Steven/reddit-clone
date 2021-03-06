import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class Dashboard extends Component {
	onLogoutClick = e => {
		e.preventDefault();
		this.props.logoutUser();
	};

	render() {
		const { user } = this.props.auth;
		// console.log('Current User: ', user.name.split(' '));
		return (
			<div>
				Dashboard
				<p>Welcome to the dashboard, {user.name.split(' ')[0]}!</p>
				<button
					style={{
						width: '150px',
						borderRadius: '3px',
						letterSpacing: '1.5px',
						marginTop: '1rem',
						backgroundColor: 'rgb(255, 69, 0)',
					}}
					onClick={this.onLogoutClick}
					className='btn btn-large waves-effect waves-light hoverable accent-3'
				>
					Logout
				</button>
			</div>
		);
	}
}

Dashboard.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
