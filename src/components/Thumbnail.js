import React from 'react'
import {Link} from 'react-router-dom'

class Thumbnail extends React.Component {

	renderDates = () => {
		if (this.props.place.date) {
		return <span className="date">{this.props.place.date}</span>
	}
	}

	render () {
		return (

			<Link className="card link" to="/place">
				<div className="image" style= {{backgroundImage: `(${this.props.place.image})`}}>
					<button className="icon">
						<i className="fas fa-heart"></i>
					</button>
				</div>
				<div className="content">
					<small className="meta">{this.props.place.description}</small>
					<h2>{this.props.place.type.name}</h2>
					<small className="location">
						<i className="fas fa-map-marker-alt"></i>
						<span>{this.props.place.location}</span>
					</small>
					<span className="price">${this.props.place.price}/night</span>
					<span className="rating">
						{[...Array(this.props.place.rating)].map(rating => <i className="fas fa-star"></i>)}
						{[...Array(5-this.props.place.rating)].map(rating => <i className="far fa-star"></i>)}
						<span>{this.props.place.reviews} Reviews</span>
					</span>
					{this.renderDates()}
				</div>
			</Link>
		)
	}
}

export default Thumbnail
