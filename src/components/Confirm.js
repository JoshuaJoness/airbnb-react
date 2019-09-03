import React from 'react'
import '../styles/global.css'
import '../styles/grid.css'
import '../styles/cards.css'
import '../styles/forms.css'
import '../styles/buttons.css'
import '../styles/sidebar.css'
import '../styles/users.css'
import '../styles/icons.css'
import Nav from './Nav'
import Thumbnail from './Thumbnail'

class Confirm extends React.Component {
	state = {
		place: [
			{
				image: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
				description: 'Entire Villa • 7 Rooms',
				type: 'Luxury Villa Indu Siam',
				price: '$350/night',
				rating: 4,
				reviews: '37 Reviews'
			}
		]
	}
	render () {
		return (
			<body>
				<Nav />
				<div className="grid medium">
					<div className="grid sidebar-left">
						<div className="sidebar">
							{this.state.place.map(place => <Thumbnail place={place}/>)}
						</div>
						<div className="content">
							<h2>Confirm Booking</h2>
							<form>
								<div className="group">
									<label>From</label>
									<input type="text" value="12/11/2019" />
								</div>
								<div className="group">
									<label>To</label>
									<input type="text" value="15/11/2019" />
								</div>
								<div className="group">
									<label>Guests</label>
									<select>
										<option>1 guest</option>
										<option>2 guests</option>
										<option>3 guests</option>
										<option selected>4 guests</option>
										<option>5 guests</option>
										<option>6 guests</option>
										<option>7 guests</option>
										<option>8 guests</option>
										<option>9 guests</option>
										<option>10 guests</option>
									</select>
								</div>
								<div className="group">
									<label>Total: 3 nights</label>
									<h2>$1,050</h2>
								</div>
								<button className="primary">Confirm</button>
							</form>
							<hr />
							<button>Cancel</button>
						</div>
					</div>
				</div>
			</body>
		)
	}
}

export default Confirm
