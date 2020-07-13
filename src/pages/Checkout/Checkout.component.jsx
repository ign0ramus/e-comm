import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
	selectCartItems,
	selectCartTotal,
} from '../../redux/cart/cartSelectors';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem.component';
import StripeButton from '../../components/StripeButton/StripeButton.component';
import './Checkout.styles.scss';

const Checkout = ({ items, total }) => (
	<div className='checkout'>
		<header className='header'>
			<div className='header-block'>
				<span>Product</span>
			</div>
			<div className='header-block'>
				<span>Description</span>
			</div>
			<div className='header-block'>
				<span>Quantity</span>
			</div>
			<div className='header-block'>
				<span>Price</span>
			</div>
			<div className='header-block'>
				<span>Remove</span>
			</div>
		</header>
		{items.map((item) => (
			<CheckoutItem key={item.id} item={item} />
		))}
		<div className='total'>
			<span>TOTAL: ${total}</span>
		</div>
		<div className='test-warning'>
			*Please use the following credit card for test payments*
			<br />
			4242 4242 4242 4242 - Exp: 01/24 - CVV: 123
		</div>
		<StripeButton price={total} />
	</div>
);

const mapStateToProps = createStructuredSelector({
	items: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
