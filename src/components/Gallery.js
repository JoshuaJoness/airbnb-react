import React from 'react'

class Gallery extends React.Component {
	state = {
		selected: this.props.images[0],
		images: this.props.images
	}
	selectImage = (i) => {
		let images = this.state.images
		let foundImage = images[i]
		this.setState({selected: foundImage})
	}

	componentWillReceiveProps (props) {
		this.setState({images: props.images, selected: props.images[0]})
	}

	render () {
		return (
			<div className="gallery">
				<div className="image-main" style={{backgroundImage: `url(${this.state.selected})`}}>
					<button className="icon">
						<i className="far fa-heart"></i>
					</button>
				</div>
				<div className="thumbnails">
				{
					this.state.images.map((image, i) => {
						return (
							<div className={this.state.selected === image ? 'thumbnail selected' : 'thumbnail'} style={{backgroundImage: `url(${image})`}} onClick={() => this.selectImage(i)}></div>
						)
					}
				)}
				</div>
			</div>
		)
	}
}

export default Gallery
