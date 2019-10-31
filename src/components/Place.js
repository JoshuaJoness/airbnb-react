import React from 'react'
import '../styles/global.css'
import '../styles/grid.css'
import '../styles/nav.css'
import '../styles/users.css'
import '../styles/icons.css'
import '../styles/cards.css'
import '../styles/gallery.css'
import '../styles/reviews.css'
import '../styles/sidebar.css'
import '../styles/buttons.css'
import '../styles/forms.css'
import "react-datepicker/dist/react-datepicker.css"

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Nav from './Nav'
import Gallery from './Gallery'
import Review from './Review'

import axios from 'axios'
import moment from 'moment'
import DatePicker from "react-datepicker"


class Place extends React.Component {
	state = {
		user:{},
		place: {
			amenities:[],
			host:{
				avatar:'',
				name:'',
				_id:''
			},
			images:[],
			type:{
				name:'',
				_id:''
			},
			reviews: []
		},
		startDate: '',
		endDate: ''
	}

	//get token from local storage, populate auth,
	//content is going to be coming from state, author is user._id, save the id in state
	//to add review .then(res) state->place->reviews -> add res.data to top of array -> set state pf place:place(reviews) review_content: '', review_rating: 0 (to reset these 2), in postreviews you have to search the database for the user name and avatar : Review.findById(data._id).populate('author').then(review) => { res.send(review)}

	UNSAFE_componentWillMount() {
		console.log('......................',this.state.place.host);
		let token = localStorage.getItem('token')
			if (token){
				axios.get(`${process.env.REACT_APP_API}/places/${this.props.match.params.id}`)
				.then(res => {
					this.setState({
						place: res.data
					})
				}).catch(err => {
					console.log(err)
				})
				axios.get(`${process.env.REACT_APP_API}/auth?token=${token}`).then(res => {
							let user = this.state.user
							user = res.data
							this.setState({user})
						}).catch(err => {
							console.log(err)})
			} else {
				this.props.history.push("/")
			}
		}
//each page has its own state, they're seperate not child and parent
//in order to pass props to the route we're going // TODO:
//react router dom feautures this.props.hisotry.push
//after passing path, pass the data that you want to send

	bookPlace = (e) => {
		e.preventDefault()
			this.props.history.push({
				pathname: `/Confirm`,
				place: this.state.place,
				checkIn: this.state.startDate,
				checkOut: this.state.endDate,
				guests: this.state.place.guests
			})
	}

	handleChangeStart = (date) => {
		this.setState({startDate: date})
	}

	handleChangeEnd = (date) => {
		this.setState({endDate: date})
	}

	render () {
		return (
			<>
				<Nav user={this.state.user}/>
				<Gallery images={this.state.place.images}/>
				<div className="grid medium">
					<div className="grid sidebar-right">
						<div className="content">
							<h1>{this.state.place.title}</h1>
							<small>
								<i className="fas fa-map-marker-alt"></i>
								<span>{this.state.place.city}, {this.state.place.country}</span>
							</small>
							<div className="user">
								<div className="avatar" style={{backgroundImage: this.state.place.host.avatar}}></div>
								<div className="name">
									<small>Hosted by</small>
									<span>{this.state.place.host.name}</span>
								</div>
							</div>
							<div className="card specs">
								<div className="content">
									<ul className="grid two">
										<li><i className="fas fa-fw fa-home"></i>{this.state.place.type.name}</li>
										<li><i className="fas fa-fw fa-user-friends"></i>{this.state.place.guests} guests</li>
										<li><i className="fas fa-fw fa-bed"></i>{this.state.place.bedrooms}</li>
										<li><i className="fas fa-fw fa-bath"></i>{this.state.place.bathrooms} baths</li>
									</ul>
								</div>
							</div>
							<p>{this.state.place.description}</p>
							<h3>Amenities</h3>
							<div className="card specs">
								<div className="content">
									<ul className="grid two">
										{this.state.place.amenities.map(a => <li key={a._id}><i key={a._id} className={a.icon}></i>{a.name}</li>)}
									</ul>
								</div>
							</div>
							<div className="reviews">
								<h2>{this.state.place.reviews.length} Reviews</h2>
								<form>
									<div className="group">
										<label>Leave a review</label>
										<textarea></textarea>
										<div className="rating">
											<i className="far fa-star"></i>
											<i className="far fa-star"></i>
											<i className="far fa-star"></i>
											<i className="far fa-star"></i>
											<i className="far fa-star"></i>
										</div>
										<button className="primary small">Submit</button>
									</div>
								</form>
								{
								this.state.place.reviews.map((review,i) => <Review key={i} avatar={review.author.avatar} author={review.author.name} content={review.content} date={moment(review.date).format('D MMMM YYYY')}/>)
								}
							</div>
						</div>
						<div className="sidebar booking">
							<div className="card shadow">
								<div className="content large">
									<h3>${this.state.place.price}<small>per night</small></h3>
									<small>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="far fa-star"></i>
										<span>{this.state.place.reviews.length} Reviews</span>
									</small>
									<form className="small">
										<div className="group">
											<label>Dates</label>
												<DatePicker
													placeholderText="Check-in"
													selected={this.state.startDate} //date from the start
													onChange={this.handleChangeStart} //calls function
													/>
												<DatePicker
													placeholderText="Check-out"
													selected={this.state.endDate}
													onChange={this.handleChangeEnd}
												/>
										</div>
										<div className="group">
											<label>Guests</label>
											<select>
												{[...Array(this.state.place.guests)].map((rating,i) => <option>{i+1} guests</option>)}
											</select>
										</div>
										<div className="group">
											<button className="secondary full" onClick={this.bookPlace} disabled= {(this.state.startDate ==='' || this.state.endDate==='' ? true : false)}>Book this place</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default Place
