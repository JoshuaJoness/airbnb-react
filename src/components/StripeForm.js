import React from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements'
import axios from 'axios'

class StripeForm extends React.Component {

	makePayment = () => {
		this.props.stripe.createToken({})
			.then(token => {
				console.log(token)

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
