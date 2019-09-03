import React from 'react'

class Gallery extends React.Component {
	render () {
		return (
			<div className="gallery">
				<div className="image-main" style={{backgroundImage: `url(${'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg'})`}}>
					<button className="icon">
						<i className="far fa-heart"></i>
					</button>
				</div>
				<div className="thumbnails">
				// {this.props.images.map(image => <div className="thumbnail" style={{backgroundImage: `url(${image})`}} </div>)}
					<div className="thumbnail selected" style={{backgroundImage: `url(${'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg'})`}}></div>
					<div className="thumbnail" style={{backgroundImage: `url(${'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223171.jpg'})`}}></div>
					<div className="thumbnail" style={{backgroundImage: `url(${'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223174.jpg'})`}}></div>
					<div className="thumbnail" style={{backgroundImage: `url(${'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223178.jpg'})`}}></div>
					<div className="thumbnail" style={{backgroundImage: `url(${'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223180.jpg'})`}}></div>
					<div className="thumbnail" style={{backgroundImage: `url(${'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223186.jpg'})`}}></div>
					<div className="thumbnail" style={{backgroundImage: `url(${'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223190.jpg'})`}}></div>
					<div className="thumbnail" style={{backgroundImage: `url(${'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223195.jpg'})`}}></div>
					<div className="thumbnail" style={{backgroundImage: `url(${'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223199.jpg'})`}}></div>
				</div>
			</div>
		)
	}
}

export default Gallery
