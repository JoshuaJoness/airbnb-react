import React from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements'
import axios from 'axios'

class StripeForm extends React.Component {

	state={
		total: this.props.total,
		place: this.props.place
	}

	makePayment = () => {
		this.props.stripe.createToken({})
			.then(token => {
				console.log(token)
				axios.post(`${process.env.REACT_APP_API}/pay`,
					token,
					amount,
					title
				).then(res => {
					console.log(res.data);
				})
			}).catch(err =>{
				console.log(err)
			})
	}

	render() {
		return(
			<>
					<CardElement />
					<button className="primary" onClick={this.makePayment}>Pay</button>
			</>
		)
	}
}




export default injectStripe(StripeForm)
