import React from 'react'

class Review extends React.Component {
	render () {
		return (
			<div className="card review">
				<div className="content">
					<div className="user">
						<div className="avatar" style={{backgroundImage: `url(${this.props.avatar})`}}></div>
						<div className="name">
							<small>{this.props.date}</small>
							<span>{this.props.author}</span>
						</div>
					</div>

					<p>{this.props.content}</p>
				</div>
			</div>
		)
	}
}

export default Review


//content is going to be coming from state, author is user._id, save the id in state
