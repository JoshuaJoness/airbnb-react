import React from 'react'
import '../styles/global.css'
import '../styles/grid.css'
import '../styles/buttons.css'
import '../styles/users.css'
import '../styles/cards.css'
import '../styles/sidebar.css'
import '../styles/icons.css'
import Nav from './Nav'
import Sidebar from './Sidebar'
import Thumbnail from './Thumbnail'
import axios from 'axios'

class Favorites extends React.Component {
	state = {
		user:{},
		activePage: 'Favorites',
		places:
		[
			{
				image:'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
					decription: 'Entire Villa • 3 Rooms',
					type:'Luxury Villa Indu Siam',
					location:'Koh Samui, Thailand',
					price: '$198/night',
					rating: 4,
					reviews:'29 Reviews',
			}
		]
	}

	componentWillMount() {
		let token = localStorage.getItem('token')
		if (token){
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

	render () {
		return (
			<body>
				<Nav user={this.state.user}/>
				<div className="grid medium">
					<div className="grid sidebar-left">
						<Sidebar activePage={this.state.activePage}/>
						<div className="content">
							<h2>My Favorites</h2>
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

export default Favorites
