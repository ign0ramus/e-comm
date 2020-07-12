import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as Icon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cartActions.js';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors.js';
import './CartIcon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemsCount }) => (
	<div onClick={toggleCartHidden} className='cart-icon'>
		<Icon className='icon' />
		<span className='item-count'>{itemsCount}</span>
	</div>
);

const mapStateToProps = (state) => ({
	itemsCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
