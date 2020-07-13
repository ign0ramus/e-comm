import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_lWy8VorFdIdi3KVp5Fi5p5cd00b0Y9rztY';

	const onToken = (token) => {
		console.log(token);
		alert('Payment successful');
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='e-comm'
			billingAddress
			shippingAddress
			image='https://sendeyo.com/up/d/f3eb2117da'
			description={`Your total price is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeButton;
