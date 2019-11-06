import React from 'react'
import {Link} from 'react-router-dom'

class Nav extends React.Component {
	render () {
		return (
			<nav>
				<Link to="/index" className="logo" style={{backgroundImage: `url(${'./logo-airbnb.png'})`}}></Link>
				<div className="profile">
					<Link to="/profile" className="button">
						<div className="avatar" style={{backgroundImage: `url(${this.props.user.avatar})`}}></div>
						<span>{this.props.user.name}</span>
					</Link>
				</div>
			</nav>
		)
	}
}

export default Nav
