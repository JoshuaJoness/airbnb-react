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
import moment from 'moment'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

class Confirm extends React.Component {
	state = {
		place: {
			amenities: [],
			host: {
				avatar: '',
				name: '',
			},
			images: [],
			type: {
				name:''
			}
		},
		checkIn:'',
		checkOut:'',
		guests: 0
	}

	componentWillMount() {
		if (localStorage.getItem('token')){
			console.log(this.props.location.place)
			let place = {
				reviews: this.props.location.place.reviews.length
			}
			this.setState({
				place: this.props.location.place,
				checkIn: this.props.location.checkIn,
				checkOut: this.props.location.checkOut,
				guests: this.props.location.guests
			}, ()=>{
				console.log('>>>>>>>>>>>>>>>', this.state);
				}
			)
		} else {
			this.props.history.push("/")
		}
	}

	render () {
		return (
			<body>
				<Nav />
				<div className="grid medium">
					<div className="grid sidebar-left">
						<div className="sidebar">
							{/*<Thumbnail place={this.state.place}/>*/}
						</div>
						<div className="content">
							<h2>Confirm Booking</h2>
							<form>
								<div className="group">
									<label>From</label>
									<input type="text" value={moment(this.state.checkIn).format('D MMMM YYYY')} />
								</div>
								<div className="group">
									<label>To</label>
									<input type="text" value={moment(this.state.checkOut).format('D MMMM YYYY')} />
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
							<button onClick={this.props.history.goBack}>Cancel</button>
						</div>
					</div>
				</div>
			</body>
		)
	}
}

export default Confirm
