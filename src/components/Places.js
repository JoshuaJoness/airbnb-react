import React from 'react'
import '../styles/global.css'
import '../styles/grid.css'
import '../styles/buttons.css'
import '../styles/nav.css'
import '../styles/filters.css'
import '../styles/users.css'
import '../styles/cards.css'
import '../styles/icons.css'
import Nav from './Nav'
import Thumbnail from './Thumbnail'
import axios from 'axios'

class Places extends React.Component {

	componentWillMount() {
		if (localStorage.getItem('token')){
			axios.get('http://localhost:4000/places')
			.then(res => {
				console.log(res.data)
				this.setState({
					places: res.data,
					originalPlaces: res.data
				})
			}).catch(err => {
				console.log(err)
			})
			axios.get(`${process.env.REACT_APP_API}}/types`)
			.then(res => {
				console.log(res.data)
				this.setState({
					types: res.data
				})
			}).catch(err => {
				console.log(err)
			})
		} else {
			this.props.history.push("/")
		}
		}

	state = {
		places:[],
		originalPlaces:[],
		types:[]
	}

	filterByType = (event) => {
		let filteredPlaces

		if (event.target.value === '1') {
				console.log(event.target.value);
			filteredPlaces = this.state.originalPlaces
		} else {
			filteredPlaces = this.state.originalPlaces.filter(place => place.type._id === event.target.value )
		}
		this.setState({places: filteredPlaces})
	}

	render () {
		return (
			<body>
				<Nav />
				<div className="filters">
					<select>
						<option value="1">Rooms: 1</option>
						<option value="1">Rooms: 2</option>
						<option value="1">Rooms: 3</option>
						<option value="1">Rooms: 4</option>
						<option value="1">Rooms: 5</option>
						<option value="1">Rooms: 6</option>
						<option value="1">Rooms: 7</option>
						<option value="1">Rooms: 8</option>
						<option value="1">Rooms: 9</option>
						<option value="1">Rooms: 10</option>
					</select>
					<select onChange={this.filterByType}>
						<option value="1">All Types</option>
						{
							this.state.types.map(type => <option value={type._id} >{type.name}</option>)
						}
					</select>
					<input type="number" placeholder="max price" />
					<select>
						<option value="date">Latest</option>
						<option value="price">Price</option>
						<option value="rating">Rating</option>
					</select>
					<input type="text" className="search" placeholder="Search..." />
				</div>
				<div className="grid five large">
				{
					this.state.places.map((place,i) => <Thumbnail key={i} place={place}/>)
				}
				</div>
			</body>
		)
	}
}

export default Places
