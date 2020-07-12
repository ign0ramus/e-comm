import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as Icon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cartActions.js';
import './CartIcon.styles.scss';

const CartIcon = ({ toggleCartHidden }) => (
	<div onClick={toggleCartHidden} className='cart-icon'>
		<Icon className='icon' />
		<span className='item-count'>0</span>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
