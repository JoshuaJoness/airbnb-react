import React from 'react'
import '../styles/global.css'
import '../styles/buttons.css'
import '../styles/cards.css'
import '../styles/forms.css'
import '../styles/grid.css'
import {Link} from 'react-router-dom'

import axios from 'axios'

class Login extends React.Component {

	state={
		user:{
			email:'',
			password:''
		}
	}

	logIntoPage = (e) => {
		e.preventDefault()
		let user = this.state.user
		if (user.email && user.password)
		{ axios.post(`${process.env.REACT_APP_API}/login`,
			user
		).then(res => {
		console.log('data', res.data)
		localStorage.setItem('token', res.data.token)
		this.props.history.push("/")
		}
	)
} else {
	alert('Please complete all the fields.')
}
}


	changeField = (e, field) => {
		let user = this.state.user
		user[field] = e.target.value
		this.setState({user})
		console.log(this.state.user);
	}

	render () {
		return (
			<body>
				<div className="grid center middle tall image">
					<div className="card small">
						<div className="content">
							<div className="logo" style={{backgroundImage: `url(${'../images/logo-airbnb.png'})`}}></div>


							<form onSubmit={this.logIntoPage}>
								<div className="group">
									<label>Email</label>
									<input type="email" onChange={(e)=>this.changeField(e, 'email')}/>
								</div>
								<div className="group">
									<label>Password</label>
									<input type="password" onChange={(e)=>this.changeField(e, 'password')}/>
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
