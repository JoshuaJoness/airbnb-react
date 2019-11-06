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

	getFile = (e) => {
		let file = e.target.files[0]
		let fileStorage = this.state.file
		fileStorage = file
		this.setState({fileStorage})
	}

	signup = (e) => {
		e.preventDefault()
		const CLOUDINARY_URL='https://api.cloudinary.com/v1_1/doflsgrub/image/upload'
		const CLOUDINARY_UPLOAD_PRESET='dklr5vf0'
		let file = this.state.fileStorage
		let formData = new FormData()
			formData.append('file', file)
			formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
			axios({
				url: CLOUDINARY_URL,
				method: 'POST',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				data: formData
			}).then(res => {
				let user = this.state. user
				if (user.email && user.location && user.name && user.password){
					user.avatar = res.data.url
					axios.post(`${process.env.REACT_APP_API}/signup`,
					user).then(res => {
						console.log('response', res.data);
						localStorage.setItem('token', res.data)
						this.props.history.push("/places")
						console.log('Success')
					}).catch(err => {
						console.log(err);
					})
				} else{
					alert('Please complete all the fields')
				}
			}).catch(err => {
				console.log(err);
			})
			}


	mouse = () => {
		console.log('hello');
	}

	render () {
		return (
			<body>
				<div className="grid center middle tall image">
					<div className="card small">
						<div className="content">
							<div onMouseOver={this.mouse} className="logo" style={{backgroundImage: `url(${'./logo-airbnb.png'})`}}></div>

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
									<input type="file"name="image"onChange={this.getFile} />
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
