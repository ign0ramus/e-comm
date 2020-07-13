import React from 'react';
import { connect } from 'react-redux';

import {
	clearItemFromCart,
	addItemToCart,
	removeItemFromCart,
} from '../../redux/cart/cartActions';
import './CheckoutItem.styles.scss';

const CheckoutItem = ({
	item,
	clearItemFromCart,
	addItemToCart,
	removeItemFromCart,
}) => {
	const { imageUrl, name, price, quantity } = item;

	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={imageUrl} alt='Cart Item' />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<div onClick={() => removeItemFromCart(item)} className='arrow'>
					&#10094;
				</div>
				<span className='value'>{quantity}</span>
				<div onClick={() => addItemToCart(item)} className='arrow'>
					&#10095;
				</div>
			</span>
			<span className='price'>{price}</span>
			<div onClick={() => clearItemFromCart(item)} className='remove-button'>
				&#10005;
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
	addItemToCart: (item) => dispatch(addItemToCart(item)),
	removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
