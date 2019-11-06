import React from 'react'
import '../styles/global.css'
import '../styles/grid.css'
import '../styles/users.css'
import '../styles/buttons.css'
import '../styles/forms.css'
import '../styles/sidebar.css'
import Nav from './Nav'
import Sidebar from './Sidebar'
import axios from 'axios'

class Create extends React.Component {

	state={
		user:{
			location:''
		},
		place:{
			amenities: [],
			images:[]
		},
		fileStorage:{}
	}

	componentWillMount() {
		let token = localStorage.getItem('token')
		if (token){
			axios.get(`${process.env.REACT_APP_API}/auth?token=${token}`).then(res => {
						let user = this.state.user
						user = res.data
						this.setState({user})
					}).catch(err => {
						console.log(err)})
			} else {
			this.props.history.push("/")
		}
	}

	changeField = (e, field) => {
		let place = this.state.place
		place[field] = e.target.value
		this.setState({place})
		console.log(this.state.place);
	}

	addAmenities = (amenity) => {
		let place = this.state.place
		place.amenities.push(amenity)
		this.setState({place})
		console.log(this.state.place);
	}

	getFile = (e) => {
		let file = e.target.files[0]
		console.log('>>>>>>>>>>>>',file);
		let fileStorage = this.state.file
		fileStorage = file
		this.setState({fileStorage})
		console.log('place',this.state.fileStorage);
	}

	postPlace = (e) => {
		const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/doflsgrub/image/upload'
		const CLOUDINARY_UPLOAD_PRESET = 'dklr5vf0'
		e.preventDefault()
		let file = this.state.fileStorage
		let formData = new FormData()
		formData.append('file', file)
		formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
		axios({
			url: CLOUDINARY_URL,
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			data:formData
		}).then(res => {
			console.log('response data',res.data);
			let place = this.state.place
			place.host = this.state.user._id
			place.images.push(res.data.url)
			// this.setState({place})
			this.setState({images: ["test"]})
			axios.post(`${process.env.REACT_APP_API}/place`,
				place)
			.then(res => {
				console.log('response data',res.data);
			})
			.catch(err => {
				console.log(err);
			})
		})
		.catch(err=>{
			console.log(err);
		})
	}

	render () {
		return (
			<body>
				<Nav user={this.state.user}/>
				<div className="grid medium">
					<div className="grid sidebar-left">
						<Sidebar />
						<div className="content">
							<h2>Host a new place</h2>

							<form onSubmit={this.postPlace}>

								<div className="group">
									<label>Title</label>
									<input onChange={(e)=>this.changeField(e,'title')} type="text" />
								</div>
								<div className="group">
									<label>Description</label>
									<textarea onChange={(e)=>this.changeField(e,'description')}></textarea>
								</div>
								<div className="group">
									<label>City or Town</label>
									<input onChange={(e)=>this.changeField(e,'city')} type="text" />
								</div>
								<div className="group">
									<label>Country</label>
									<input onChange={(e)=>this.changeField(e,'country')} type="text" />
								</div>
								<div className="group">
									<label>Price per Night (USD)</label>
									<input onChange={(e)=>this.changeField(e,'price')} type="number" />
								</div>
								<div className="group">
									<label>Type</label>
									<select onChange={(e)=>this.changeField(e,'type')}>
										<option value="5d7f5a883b72fd00170fb547">Entire Villa</option>
										<option value="5d7f5fad3b72fd00170fb549">Entire House</option>
										<option value="5d7f5fbc3b72fd00170fb54a">Entire Apartment</option>
										<option value="5d7f5fcb3b72fd00170fb54b">Private Room</option>
										<option value="5d7f5fdf3b72fd00170fb54c">Shared Villa</option>
										<option value="5d7f5ff03b72fd00170fb54d">Shared House</option>
										<option value="5d7f5ff63b72fd00170fb54e">Shared Apartment</option>
									</select>
								</div>
								<div className="group">
									<label>Number of Rooms</label>
									<input onChange={(e)=>this.changeField(e,'rooms')} type="number" />
								</div>
								<div className="group">
									<label>Number of Bathrooms</label>
									<input onChange={(e)=>this.changeField(e,'bathrooms')} type="number" />
								</div>
								<div className="group">
									<label>Maximum number of Guests</label>
									<input onChange={(e)=>this.changeField(e,'guests')} type="number" />
								</div>
								<div className="group">
									<label>Upload Photos</label>

									<input type="file"name="image"onChange={this.getFile} />

								</div>
								<div className="group">
									<label>Amenities</label>
									<label className="checkbox">
										<input onChange={(e)=>this.addAmenities('5d7f63b83b72fd00170fb552')} type="checkbox" /> Swimming Pool
									</label>
									<label className="checkbox">
										<input onChange={(e)=>this.addAmenities('5d7f63b83b72fd00170fb54f')} type="checkbox" /> Kitchen
									</label>
									<label className="checkbox">
										<input onChange={(e)=>this.addAmenities('Wi-Fi')} type="checkbox" /> Wi-Fi
									</label>
									<label className="checkbox">
										<input onChange={(e)=>this.addAmenities('5d7f63b83b72fd00170fb554')} type="checkbox" /> TV
									</label>
									<label className="checkbox">
										<input onChange={(e)=>this.addAmenities('5d7f63b83b72fd00170fb550')} type="checkbox" /> Gym
									</label>
									<label className="checkbox">
										<input onChange={(e)=>this.addAmenities('5d7f63b83b72fd00170fb551')} type="checkbox" /> Iron
									</label>
									<label className="checkbox">
										<input onChange={(e)=>this.addAmenities('5d7f63b83b72fd00170fb553')} type="checkbox" /> Air Conditioning
									</label>
								</div>
								<button className="primary">Publish this Place</button>
								<button className="cancel"><i className="fas fa-times"></i></button>
							</form>
						</div>
					</div>
				</div>
			</body>
		)
	}
}

export default Create
