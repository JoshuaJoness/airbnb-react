import React from 'react'
import {Link} from 'react-router-dom'

class Nav extends React.Component {
	render () {
		return (
			<nav>
				<Link to="/index" className="logo" style={{backgroundImage: `url(${'../images/logo-airbnb.png'})`}}></Link>
				<div className="profile">
					<Link to="/profile" className="button">
						<div className="avatar" style={{backgroundImage: `url(${'https://randomuser.me/api/portraits/men/9.jpg'})`}}></div>
						<span>Tony</span>
					</Link>
				</div>
			</nav>
		)
	}
}

export default Nav
