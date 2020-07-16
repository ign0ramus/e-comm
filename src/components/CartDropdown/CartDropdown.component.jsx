import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../Button/Button.component';
import CartItem from '../CartItem/CartItem.component';
import { selectCartItems } from '../../redux/cart/cartSelectors.js';
import { toggleCartHidden } from '../../redux/cart/cartActions';

const Dropdown = styled.div`
	position: absolute;
	width: 240px;
	height: 340px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 90px;
	right: 40px;
	z-index: 5;
`;

const CartItems = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	margin-bottom: 10px;

	button {
		margin-top: auto;
	}
`;

const Empty = styled.span`
	font-size: 18px;
	margin: 50px auto;
`;

const CartDropdown = ({ items, toggleCartHidden }) => {
	const history = useHistory();

	const handleClick = () => {
		toggleCartHidden();
		history.push('/checkout');
	};

	return (
		<Dropdown>
			<CartItems>
				{items.length ? (
					items.map((item) => <CartItem key={item.id} item={item} />)
				) : (
					<Empty>Your cart is empty</Empty>
				)}
			</CartItems>
			<Button onClick={handleClick}>GO TO CHECKOUT</Button>
		</Dropdown>
	);
};

const mapStateToProps = createStructuredSelector({
	items: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
