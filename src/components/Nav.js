import React from 'react'

class Nav extends React.Component {
	render () {
		return (
			<nav>
				<a href="index.html" className="logo" style={{backgroundImage: `url(${'../images/logo-airbnb.png'})`}}></a>
				<div className="profile">
					<a href="profile.html" className="button">
						<div className="avatar" style={{backgroundImage: `url(${'https://randomuser.me/api/portraits/men/9.jpg'})`}}></div>
						<span>Tony</span>
					</a>
				</div>
			</nav>
		)
	}
}

export default Nav
