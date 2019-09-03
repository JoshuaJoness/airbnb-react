import React from 'react'

class Sidebar extends React.Component {
	render () {
		return (
			<div className="sidebar">
				<ul>
					<li className="active">
						<a href="profile.html">Profile</a>
					</li>
					<li className="">
						<a href="bookings.html">Bookings</a>
					</li>
					<li className="">
						<a href="favorites.html">Favorites</a>
					</li>
					<li className="">
						<a href="host.html">Host</a>
					</li>
				</ul>
			</div>
		)
	}
}

export default Sidebar
