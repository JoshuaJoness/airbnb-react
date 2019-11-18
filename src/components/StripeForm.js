import React from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements'
import axios from 'axios'

class StripeForm extends React.Component {

	state={
		amount: this.props.amount,
		place: this.props.place
	}

	makePayment = (e) => {
		e.preventDefault()
		this.props.stripe.createToken({})
			.then(token => {
				console.log(token)
				console.log('amount',this.state.amount);
				let amount = this.state.amount
				axios.post(`${process.env.REACT_APP_API}/pay`,
					{token: token,
					amount: amount}
				).then(res => {
					console.log(res.data);
				})
			}).catch(err =>{
				console.log(err)
			})
	}

	render() {
		return(
			<div className="checkout">
				<p>Would you like to complete the purchase?</p>
				<CardElement />
				<button className="primary" onClick={this.makePayment}>Pay</button>
			</div>
		)
	}
}




export default injectStripe(StripeForm)
