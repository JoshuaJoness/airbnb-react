import React from 'react'
import '../styles/global.css'
import '../styles/grid.css'
import '../styles/users.css'
import '../styles/buttons.css'
import '../styles/forms.css'
import '../styles/sidebar.css'
import Nav from './Nav'
import Sidebar from './Sidebar'

class Create extends React.Component {
	render () {
		return (
			<body>
				<Nav />
				<div className="grid medium">
					<div className="grid sidebar-left">
						<Sidebar />
						<div className="content">
							<h2>Host a new place</h2>
							<form>
								<div className="group">
									<label>Title</label>
									<input type="text" />
								</div>
								<div className="group">
									<label>Description</label>
									<textarea></textarea>
								</div>
								<div className="group">
									<label>City or Town</label>
									<input type="text" />
								</div>
								<div className="group">
									<label>Country</label>
									<input type="text" />
								</div>
								<div className="group">
									<label>Price per Night (USD)</label>
									<input type="number" />
								</div>
								<div className="group">
									<label>Type</label>
									<select>
										<option>Entire Villa</option>
										<option>Entire House</option>
										<option>Entire Apartment</option>
										<option>Private Room</option>
										<option>Shared Villa</option>
										<option>Shared House</option>
										<option>Shared Apartment</option>
									</select>
								</div>
								<div className="group">
									<label>Number of Rooms</label>
									<input type="number" />
								</div>
								<div className="group">
									<label>Number of Bathrooms</label>
									<input type="number" />
								</div>
								<div className="group">
									<label>Maximum number of Guests</label>
									<input type="number" />
								</div>
								<div className="group">
									<label>Upload Photos</label>
									<input type="file" multiple />
								</div>
								<div className="group">
									<label>Amenities</label>
									<label className="checkbox">
										<input type="checkbox" /> Swimming Pool
									</label>
									<label className="checkbox">
										<input type="checkbox" /> Kitchen
									</label>
									<label className="checkbox">
										<input type="checkbox" /> Wi-Fi
									</label>
									<label className="checkbox">
										<input type="checkbox" /> TV
									</label>
									<label className="checkbox">
										<input type="checkbox" /> Gym
									</label>
									<label className="checkbox">
										<input type="checkbox" /> Iron
									</label>
									<label className="checkbox">
										<input type="checkbox" /> Air Conditioning
									</label>
								</div>
								<button className="primary">Publish this Place</button>
								<button className="cancel"><i className="fas fa-times"></i></button>
							</form>
						</div>
					</div>
				</div>
			</body>
		)
	}
}

export default Create
