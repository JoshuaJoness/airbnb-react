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

import Nav from './Nav'
import Gallery from './Gallery'
import Review from './Review'

import axios from 'axios'
import moment from 'moment'

class Place extends React.Component {
	state = {
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
		}
	}

	componentWillMount() {
		axios.get(`http://localhost:4000/places/${this.props.match.params.id}`)
		.then(res => {
			console.log('data', res.data)
			this.setState({
				place: res.data
			})
		}).catch(err => {
			console.log(err)
		})
	}

	render () {
		return (
			<>
				<Nav />
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
										{this.state.place.amenities.map(a => <li><i className={a.icon}></i>{a.name}</li>)}
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
								this.state.place.reviews.map((review,i) => <Review key={i} avatar={review.avatar} author={review.author} content={review.content} date={moment(review.date).format('D MMMM YYYY')}/>)
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
											<input type="text" placeholder="Check-in" />
											<input type="text" placeholder="Check-out" />
										</div>
										<div className="group">
											<label>Guests</label>
											<select>
												<option>1 guest</option>
												<option>2 guests</option>
												<option>3 guests</option>
												<option>4 guests</option>
												<option>5 guests</option>
												<option>6 guests</option>
												<option>7 guests</option>
												<option>8 guests</option>
												<option>9 guests</option>
												<option>10 guests</option>
											</select>
										</div>
										<div className="group">
											<button className="secondary full">Book this place</button>
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
