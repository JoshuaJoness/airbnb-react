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

class Place extends React.Component {
	state = {
		reviews: [{avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
								date: '27 July 2019',
								name: 'Amanda',
								rating: 5,
								review:'It was beyond my imagination that my AirBnB experience could be better than a 5 star resort hotel. It is one of the most beautiful villa that I have had stayed so far in the many countries travelled so far. The pictures have not sufficiently described the details of the place.' },
							{avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
								date: '22 July 2019',
								name: 'John',
								rating: 3,
								review:'It was beyond my imagination that my AirBnB experience could be better than a 5 star resort hotel. It is one of the most beautiful villa that I have had stayed so far in the many countries travelled so far. The pictures have not sufficiently described the details of the place.' },
							{avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
								date: '4 July 2019',
								name: 'Sam',
								rating: 4,
								review:'It was beyond my imagination that my AirBnB experience could be better than a 5 star resort hotel. It is one of the most beautiful villa that I have had stayed so far in the many countries travelled so far. The pictures have not sufficiently described the details of the place.' },
							{avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
								date: '27 May 2019',
								name: 'Ella',
								rating: 5,
								review:'It was beyond my imagination that my AirBnB experience could be better than a 5 star resort hotel. It is one of the most beautiful villa that I have had stayed so far in the many countries travelled so far. The pictures have not sufficiently described the details of the place.' }
							],
		images: ['https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
		 					'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223171.jpg',
							'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223174.jpg',
							'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223178.jpg',
							'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223180.jpg',
							'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223186.jpg',
							'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223190.jpg',
							'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223195.jpg',
							'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223199.jpg'
		]
	}
	render () {
		return (
			<body>
				<Nav />
				<Gallery images={this.state.images}/>
				<div className="grid medium">
					<div className="grid sidebar-right">
						<div className="content">
							<h1>Luxury Villa Indu Siam</h1>
							<small>
								<i className="fas fa-map-marker-alt"></i>
								<span>Koh Samui, Thailand</span>
							</small>
							<div className="user">
								<div className="avatar" style={{backgroundImage: `url(${'https://randomuser.me/api/portraits/women/2.jpg'})`}}></div>
								<div className="name">
									<small>Hosted by</small>
									<span>Kitty</span>
								</div>
							</div>
							<div className="card specs">
								<div className="content">
									<ul className="grid two">
										<li><i class="fas fa-fw fa-home"></i>Entire Villa</li>
										<li><i class="fas fa-fw fa-user-friends"></i>10 guests</li>
										<li><i class="fas fa-fw fa-bed"></i>7 bedrooms</li>
										<li><i class="fas fa-fw fa-bath"></i>6 baths</li>
									</ul>
								</div>
							</div>
							<p>Stylish, tropical, luxurious, airy and absolute beach front, this villa combines form and function, enjoying magnificent views of Samui’s small islands and the sea beyond. With 520sqm of indoor/outdoor living space with 5 ensuite bedrooms, large living area, beachfront infinity pool, garden, air conditioned gym, professional pool table, bbq and Sala, this villa is perfect for up to 10 adults With 260sqm (2798sqfeet) of living space and 250sqm (2,700sqfeet) of outdoor space.</p>
							<h3>Amenities</h3>
							<div className="card specs">
								<div className="content">
									<ul className="grid two">
										<li><i className="fas fa-utensils"></i>Kitchen</li>
										<li><i className="fas fa-dumbbell"></i>Gym</li>
										<li><i className="fas fa-dumbbell"></i>Wi-Fi</li>
										<li><i className="fas fa-tshirt"></i>Iron</li>
										<li><i className="fas fa-swimmer"></i>Swimming Pool</li>
										<li><i className="fas fa-wind"></i>Air Conditioning</li>
										<li><i className="fas fa-tv"></i>TV</li>
									</ul>
								</div>
							</div>
							<div className="reviews">
								<h2>4 Reviews</h2>
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
								this.state.reviews.map((user,i) => <Review key={i} user={user}/>)
								}
							</div>
						</div>
						<div className="sidebar booking">
							<div className="card shadow">
								<div className="content large">
									<h3>$350<small>per night</small></h3>
									<small>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="far fa-star"></i>
										<span>4 Reviews</span>
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
			</body>
		)
	}
}

export default Place