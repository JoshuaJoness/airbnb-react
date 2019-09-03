import React from 'react'
import '../styles/global.css'
import '../styles/grid.css'
import '../styles/users.css'
import '../styles/cards.css'
import '../styles/buttons.css'
import '../styles/sidebar.css'
import '../styles/icons.css'
import Nav from './Nav'
import Sidebar from './Sidebar'


class Host extends React.Component {
	render () {
		return (
			<body>
				<Nav />
				<div className="grid medium">
					<div className="grid sidebar-left">
						<Sidebar />
						<div className="content">
							<a className="button primary" href="create.html">Host new place</a>
							<hr />
							<h2>Places I'm hosting</h2>
							<div className="grid two">
								<a className="card link" href="place.html">
									<div className="image" style={{backgroundImage: `url(${'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg'})`}}>
										<button className="icon">
											<i className="far fa-heart"></i>
										</button>
									</div>
									<div className="content">
										<small className="meta">Entire Villa • 3 Rooms</small>
										<h2>Luxury Villa Indu Siam</h2>
										<small className="location">
											<i className="fas fa-map-marker-alt"></i>
											<span>Koh Samui, Thailand</span>
										</small>
										<span className="price">$198/night</span>
										<span className="rating">
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="far fa-star"></i>
											<span>29 Reviews</span>
										</span>
									</div>
								</a>
								<a className="card link" href="place.html">
									<div className="image" style={{backgroundImage: `url(${'https://a0.muscache.com/4ea/air/v2/pictures/eee424d0-ca05-4405-8bdb-e5caf2db3fbe.jpg'})`}}>
										<button className="icon">
											<i className="far fa-heart"></i>
										</button>
									</div>
									<div className="content">
										<small className="meta">Entire House • 1 Room</small>
										<h2>Dreamy Tropical Tree House</h2>
										<small className="location">
											<i className="fas fa-map-marker-alt"></i>
											<span>Hilo Forest, Hawaii</span>
										</small>
										<span className="price">$120/night</span>
										<span className="rating">
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<span>127 Reviews</span>
										</span>
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

export default Host
