import React from 'react'
import {Link} from 'react-router-dom'

class Thumbnail extends React.Component {

	renderDates = () => {
		if (this.props.place.date) {
		return <span className="date">{this.props.place.date}</span>}}

	like = () => {
		console.log('hi');
	}

	render () {
		return (
			<Link className="card link" to={`${'/place'}/${this.props.place._id}`}>
				<div className="image" style= {{backgroundImage: `url(${this.props.place.image})`}}>
					<button className="icon" onClick={this.like}>
						<i className="fas fa-heart"></i>
					</button>
				</div>
				<div className="content">
					<small className="meta">{this.props.place.description}</small>
					<h2>{this.props.place.title}</h2>
					<small className="location">
						<i className="fas fa-map-marker-alt"></i>
						<span>{this.props.place.location}</span>
					</small>
					<span className="price">${this.props.place.price}/night</span>
					<span className="rating">
						{[...Array(this.props.place.rating)].map((rating,i) => <i key={i} className="fas fa-star"></i>)}
						{[...Array(5-this.props.place.rating)].map((rating,i) => <i key={i} className="far fa-star"></i>)}
						<span>{this.props.place.reviews} Reviews</span>
					</span>
					{this.renderDates()}
				</div>
			</Link>
		)
	}
}

export default Thumbnail
