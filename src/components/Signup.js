import React from 'react'
import '../styles/global.css'
import '../styles/buttons.css'
import '../styles/cards.css'
import '../styles/forms.css'
// import '../styles/stylesheet.css'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Signup extends React.Component {

	state= {
		user: {
			avatar:'',
			email:'',
			location:'',
			name:'',
			password:''
		}
	}

	changeField = (e, field) => {
		let user = this.state.user
		user[field] = e.target.value
		this.setState({user})
		console.log(this.state.user);
	}

	signup = (e) => {
		e.preventDefault()
		let user = this.state.user
		if (user.email && user.location && user.name && user.password)
		{	axios.post(`${process.env.REACT_APP_API}/signup`,
			this.state.user
		).then(res => {
			console.log('data', res.data)
			localStorage.setItem('token', res.data)
			this.props.history.push("/places")
			}
		)
	} else {
		alert('Please complete all the fields');
	}
}

	render () {
		return (
			<body>
				<div className="grid center middle tall image">
					<div className="card small">
						<div className="content">
							<div className="logo" style={{backgroundImage: `url(${'../images/logo-airbnb.png'})`}}></div>

							<form onSubmit={this.signup}>
								<div className="group">
									<label>Name</label>
									<input type="text" onChange={(e)=>this.changeField(e,'name')}/>
								</div>
								<div className="group">
									<label>Email</label>
									<input type="email" onChange={(e)=>this.changeField(e,'email')}/>
								</div>
								<div className="group">
									<label>Password</label>
									<input type="password" onChange={(e)=>this.changeField(e,'password')}/>
								</div>
								<div className="group">
									<label>Location</label>
									<input type="text" onChange={(e)=>this.changeField(e,'location')}/>
								</div>
								<div className="group">
									<label>Profile Picture</label>
									<input type="file"/>
								</div>
								<button className="primary">Signup</button>
							</form>
							<p className="footer">
								Already have an account? <Link to="/Login">Login</Link>
							</p>
						</div>
					</div>
				</div>
			</body>
		)
	}
}

export default Signup
