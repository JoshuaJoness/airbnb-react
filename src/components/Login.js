import React from 'react'
import '../styles/global.css'
import '../styles/buttons.css'
import '../styles/cards.css'
import '../styles/forms.css'
import '../styles/grid.css'
import {Link} from 'react-router-dom'

class Login extends React.Component {
	render () {
		return (
			<body>
				<div className="grid center middle tall image">
					<div className="card small">
						<div className="content">
							<div className="logo" style={{backgroundImage: `url(${'../images/logo-airbnb.png'})`}}></div>
							<form>
								<div className="group">
									<label>Email</label>
									<input type="email" />
								</div>
								<div className="group">
									<label>Password</label>
									<input type="password" />
								</div>
								<button className="primary">Login</button>
							</form>
							<p className="footer">
								New to Airbnb? <Link to="/Signup">Signup</Link>
							</p>
						</div>
					</div>
				</div>
			</body>
		)
	}
}

export default Login
