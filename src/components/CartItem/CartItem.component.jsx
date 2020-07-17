import React from 'react';
import styled from 'styled-components';

const CartItemContainer = styled.div`
	width: 100%;
	display: flex;
	height: 5rem;
	margin-bottom: 0.9rem;

	img {
		width: 30%;
	}
`;

const ItemDetails = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 0.6rem 1.25rem;
`;

const Name = styled.span`
	font-size: 1rem;
`;

const CartItem = ({ item: { name, price, imageUrl, quantity } }) => (
	<CartItemContainer>
		<img src={imageUrl} alt='Cart Item' />
		<ItemDetails>
			<Name>{name}</Name>
			<span>
				{quantity} x ${price}
			</span>
		</ItemDetails>
	</CartItemContainer>
);

export default React.memo(CartItem);
