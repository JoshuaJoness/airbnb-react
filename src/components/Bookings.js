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
import Thumbnail from './Thumbnail'
import axios from 'axios'

class Bookings extends React.Component {
	state={
		user:{},
		places: [
			{image:'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
				decription: 'Entire Villa • 3 Rooms',
				type:'Luxury Villa Indu Siam',
				location:'Koh Samui, Thailand',
				price: '5 nights • $1,750 Total',
				rating: 4,
				reviews:'29 Reviews',
				date:'10 Aug 2020 - 15 Aug 2020',
				completed: true},
			{image:'https://a0.muscache.com/4ea/air/v2/pictures/eee424d0-ca05-4405-8bdb-e5caf2db3fbe.jpg',
				decription: 'Entire Villa • 6 Rooms',
				type:'Villa Kelusa',
				location:'Bali, Indonesia',
				price: '3 nights • $190 Tota',
				rating: 3,
				reviews:'18 Reviews',
				date:'01 May 2019 - 04 May 2019'},
			{image:'https://a0.muscache.com/4ea/air/v2/pictures/58f86a91-a526-4e1b-934e-8f6bc3f60e10.jpg',
				decription: 'Private Room',
				type:'Tropical Architecture',
				location:'Koh Samui, Thailand',
				price: '9 nights • $2,980 Total',
				rating: 5,
				reviews:'290 Reviews',
				date:'18 Apr 2019 - 27 Apr 2019'},
		],
		activePage: 'Bookings'
	}

	componentWillMount() {
		let token = localStorage.getItem('token')
		if (token){
			axios.get(`${process.env.REACT_APP_API}/auth?token=${token}`).then(res => {
				console.log(res.data);
					let user = this.state.user
					user = res.data
					this.setState({user})
				}).catch(err => {
					console.log(err)})
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
						<Sidebar activePage={this.state.activePage}/>
						<div className="content">
							<h2>Upcoming Trips</h2>
							<div className="grid two">
								{this.state.places.map(place => <Thumbnail place={place}/>)}
							</div>
							<h2>Past Trips</h2>
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

export default Bookings
