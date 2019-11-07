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
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Elements, StripeProvider} from 'react-stripe-elements'
import StripeForm from './StripeForm'

class Confirm extends React.Component {
	state =
	{
		user:{
			avatar:'',
			email:'',
			location:'',
			name:'',
			password:''
		},
		place: {
			amenities: [],
			host: {
				avatar: '',
				name: '',
			},
			images: [],
			image: '',
			type: {
				name:''
			},
			reviews: [],
			rating: 0,
			image:''
		},
		checkIn:'',
		checkOut:'',
		guests: 0,
		user:{},
		pk: '',
		total: 0

	}

	componentWillMount() {

		console.log(this.props.location.place);
		let place = this.props.location.place
		place.image = place.images[0]
		let token = localStorage.getItem('token')
		if (token){
			this.setState({
				place: place,

			 checkIn: this.props.location.checkIn,
			 checkOut: this.props.location.checkOut,
			 guests: this.props.location.guests
			})
			axios.get(`${process.env.REACT_APP_API}/auth?token=${token}`).then(res => {
					let user = this.state.user
					user = res.data
					this.setState({user} , ()=>{
						console.log('>>>>>>>>>>>>>>>', this.state)
					})
				}).catch(err => {console.log(err);})

		} else {
			this.props.history.push("/")
		}
	}

	render () {
		return (
			<body>
				<Nav user={this.state.user}/>
				<div className="grid medium">
					<div className="grid sidebar-left">
						<div className="sidebar">
							<Thumbnail
								place={this.state.place}
							 />
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
									<label>Total: {moment.duration(moment(this.state.checkOut).diff(moment(this.state.checkIn))).days()} nights</label>
									<h2>$1,050</h2>
								</div>
								<button className="primary">Confirm</button>
							</form>
							<hr />
							<button onClick={this.props.history.goBack}>Cancel</button>
						</div>
					</div>
				</div>
					<StripeProvider apiKey='pk_test_E3fCpV8m1GhstYt5O7hnIQYs00Da1UQSBp' total={this.state.total} place={this.state.place.title}>
						<div className="stripe-form">
							<Elements>
								<StripeForm> {this.props.stripe.createToken({}).then(token => {
								  console.log('hi');
								})} </StripeForm>
							</Elements>
						</div>
					</StripeProvider>
			</body>
		)
	}
}

export default Confirm
