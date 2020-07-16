import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

const CartDropdown = () => {
	const history = useHistory();
	const items = useSelector(selectCartItems);
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(toggleCartHidden());
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

export default CartDropdown;
