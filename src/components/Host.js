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
import Thumbnail from './Thumbnail'
import {Link} from 'react-router-dom'


class Host extends React.Component {
	state = {
		places: [
			{
				image:'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
					decription: 'Entire Villa • 3 Rooms',
					type:'Luxury Villa Indu Siam',
					location:'Koh Samui, Thailand',
					price: '$198/night',
					rating: 4,
					reviews:'29 Reviews',
			},
			{
				image:'https://a0.muscache.com/4ea/air/v2/pictures/eee424d0-ca05-4405-8bdb-e5caf2db3fbe.jpg',
					decription: 'Entire House • 1 Room',
					type:'Dreamy Tropical Tree House',
					location:'Hilo Forest, Hawaii',
					price: '$120/night',
					rating: 5,
					reviews:'127 Reviews',
			},
		],
		activePage: 'Host'
	}
	render () {
		return (
			<body>
				<Nav />
				<div className="grid medium">
					<div className="grid sidebar-left">
						<Sidebar activePage={this.state.activePage} />
						<div className="content">
							<Link className="button primary" to="/create">Host new place</Link>
							<hr />
							<h2>Places I'm hosting</h2>
							<div className="grid two">
								{this.state.places.map(place => <Thumbnail place={place}/>)}
							</div>
						</div>
					</div>
				</div>
			</body>
		)
	}
}

export default Host
