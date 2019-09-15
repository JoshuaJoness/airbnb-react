import React from 'react'
import '../styles/global.css'
import '../styles/grid.css'
import '../styles/forms.css'
import '../styles/buttons.css'
import '../styles/sidebar.css'
import '../styles/nav.css'
import '../styles/users.css'
import Nav from './Nav'
import Sidebar from './Sidebar'

class Profile extends React.Component {
	state = {
		activePage: 'Profile'
	}

	logout = () => {
		localStorage.removeItem('token')
		this.props.history.push("/login")
	}

	render () {
		return (
			<body>
				<Nav />
				<div className="grid medium">
					<div className="grid sidebar-left">
						<Sidebar activePage={this.state.activePage} />
						<div className="content">
							<h2>My Profile</h2>
							<form>
								<div className="group">
									<label>Name</label>
									<input type="text" value="Tony" />
								</div>
								<div className="group">
									<label>Email</label>
									<input type="email" value="tony@tortugacoders.com" />
								</div>
								<div className="group">
									<label>Location</label>
									<input type="text" value="Thailand" />
								</div>
								<div className="group">
									<label>Profile Picture</label>
									<div className="user">
										<div className="avatar" style={{backgroundImage: `(${'https://randomuser.me/api/portraits/men/9.jpg'})`}}></div>
										<div className="name">
											<input type="file" />
										</div>
									</div>
								</div>
								<button>Save Changes</button>
							</form>
							<hr />
							<button className="secondary" onClick={this.logout}>Logout</button>
						</div>
					</div>
				</div>
			</body>

		)
	}
}

export default Profile
