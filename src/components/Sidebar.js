import React from 'react'
import {Link} from 'react-router-dom'

class Sidebar extends React.Component {
	state = {
		activePage: this.props.activePage
	}
	render () {
		return (
			<div className="sidebar">
				<ul>
					<li className={this.state.activePage === 'Profile' ? 'active' : '' }>
						<Link to="/profile">Profile</Link>
					</li>
					<li className={this.state.activePage === 'Bookings' ? 'active' : ''}>
						<Link to="/bookings">Bookings</Link>
					</li>
					<li className={this.state.activePage === 'Favorites' ? 'active' : ''}>
						<Link to="/favorites">Favorites</Link>
					</li>
					<li className={this.state.activePage === 'Host' ? 'active' : ''}>
						<Link to="/host">Host</Link>
					</li>
				</ul>
			</div>
		)
	}
}

export default Sidebar
