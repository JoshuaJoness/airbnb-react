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
import axios from 'axios'

class Host extends React.Component {
	state = {
		user:{},
		places: [

		],
		activePage: 'Host'
	}

	componentWillMount() {
			let token = localStorage.getItem('token')
			if (token){
				axios.get(`${process.env.REACT_APP_API}/auth?token=${token}`).then(res => {
							let user = this.state.user
							user = res.data
							this.setState({user})

							axios.post(`${process.env.REACT_APP_API}/hosting`, this.state.user)
							.then(res => {
								console.log('res.data',res.data);
								let places = this.state.places
								places = res.data
								this.setState({places}, ()=> {console.log(this.state)})

							}).catch(err=>{
								console.log(err);
							})

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
