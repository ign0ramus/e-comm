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
	width: 15rem;
	height: 21.25rem;
	display: flex;
	flex-direction: column;
	padding: 1.25rem;
	border: 1px solid black;
	background-color: white;
	top: 5.6rem;
	right: 2.5rem;
	z-index: 5;
`;

const CartItems = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	margin-bottom: 0.6rem;

	button {
		margin-top: auto;
	}
`;

const Empty = styled.span`
	font-size: 1.1rem;
	margin: 3.1rem auto;
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
