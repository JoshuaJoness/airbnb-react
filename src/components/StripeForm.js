import {Elements, StripeProvider} from react-stripe-elements

class StripeForm extends React.component {
	render() {
		return(
			<StripeProvider {process.env.STRIPE_PUBLIC_KEY}=>
			  <Elements>
					<div className="">
			    	<FormComponent {this.props.stripe.createToken({})
							.then(token => {
								console.log(token)
								axios.post(`${process.env.REACT_APP_API}/pay`)
							}).catch(err =>{
								console.log(err)
							})}>
					</div>
			  </Elements>
			</StripeProvider>
		)
	}
}
