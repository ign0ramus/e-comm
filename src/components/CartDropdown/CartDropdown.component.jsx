import React from 'react';
import { connect } from 'react-redux';

import Button from '../Button/Button.component';
import CartItem from '../CartItem/CartItem.component';
import { selectCartItems } from '../../redux/cart/cartSelectors.js';
import './CartDropdown.styles.scss';

const CartDropdown = ({ items }) => (
	<div className='dropdown'>
		<div className='cart-items'>
			{items.map((item) => (
				<CartItem key={item.id} item={item} />
			))}
		</div>
		<Button>GO TO CHECKOUT</Button>
	</div>
);

const mapStateToProps = (state) => ({
	items: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
