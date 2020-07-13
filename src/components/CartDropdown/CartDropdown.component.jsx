import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import Button from '../Button/Button.component';
import CartItem from '../CartItem/CartItem.component';
import { selectCartItems } from '../../redux/cart/cartSelectors.js';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import './CartDropdown.styles.scss';

const CartDropdown = ({ items, history, toggleCartHidden }) => {
	const handleClick = () => {
		toggleCartHidden();
		history.push('/checkout');
	};

	return (
		<div className='dropdown'>
			<div className='cart-items'>
				{items.length ? (
					items.map((item) => <CartItem key={item.id} item={item} />)
				) : (
					<span className='empty'>Your cart is empty</span>
				)}
			</div>
			<Button onClick={handleClick}>GO TO CHECKOUT</Button>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	items: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
