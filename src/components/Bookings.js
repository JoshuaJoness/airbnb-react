import React from 'react'
import '../styles/global.css'
import '../styles/grid.css'
import '../styles/buttons.css'
import '../styles/nav.css'
import '../styles/users.css'
import '../styles/icons.css'
import '../styles/cards.css'
import '../styles/sidebar.css'
import Nav from './Nav'
import Sidebar from './Sidebar'

class Bookings extends React.Component {
	render () {
		return (
			<body>
				<Nav />
				<div className="grid medium">
					<div className="grid sidebar-left">
						<Sidebar />
						<div className="content">
							<h2>Upcoming Trips</h2>
							<div className="grid two">
								<a className="card link" href="place.html">
									<div className="image" style={{backgroundImage: `(${'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg'})`}}>
										<button className="icon">
											<i className="fas fa-heart"></i>
										</button>className
									</div>
									<div className="content">
										<small className="meta">Entire Villa • 3 Rooms</small>
										<h2>Luxury Villa Indu Siam</h2>
										<small className="location">
											<i className="fas fa-map-marker-alt"></i>
											<span>Koh Samui, Thailand</span>
										</small>
										<span className="price">5 nights • $1,750 Total</span>
										<span className="rating">
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="far fa-star"></i>
											<span>29 Reviews</span>
										</span>
										<span className="date">10 Aug 2020 - 15 Aug 2020</span>
									</div>
								</a>
							</div>
							<h2>Past Trips</h2>
							<div className="grid two">
								<a className="card link" href="place.html">
									<div className="image" style={{backgroundImage: `(${'https://a0.muscache.com/4ea/air/v2/pictures/eee424d0-ca05-4405-8bdb-e5caf2db3fbe.jpg'})`}}>
										<button className="icon">
											<i className="far fa-heart"></i>
										</button>
									</div>
									<div className="content">
										<small className="meta">Entire Villa • 6 Rooms</small>
										<h2>Villa Kelusa</h2>
										<small className="location">
											<i className="fas fa-map-marker-alt"></i>
											<span>Bali, Indonesia</span>
										</small>
										<span className="price">3 nights • $190 Total</span>
										<span className="rating">
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="far fa-star"></i>
											<i className="far fa-star"></i>
											<span>18 Reviews</span>
										</span>
										<span className="date">01 May 2019 - 04 May 2019</span>
									</div>
								</a>
								<a className="card link" href="place.html">
									<div className="image" style={{backgroundImage: `(${'https://a0.muscache.com/4ea/air/v2/pictures/58f86a91-a526-4e1b-934e-8f6bc3f60e10.jpg'})`}}>
										<button className="icon">
											<i className="far fa-heart"></i>
										</button>
									</div>
									<div className="content">
										<small className="meta">Private Room</small>
										<h2>Tropical Architecture</h2>
										<small className="location">
											<i className="fas fa-map-marker-alt"></i>
											<span>Koh Samui, Thailand</span>
										</small>
										<span className="price">9 nights • $2,980 Total</span>
										<span className="rating">
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<span>290 Reviews</span>
										</span>
										<span className="date">18 Apr 2019 - 27 Apr 2019</span>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</body>
		)
	}
}

export default Bookings
