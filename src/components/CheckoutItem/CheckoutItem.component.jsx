import React from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';

import {
	clearItemFromCart,
	addItemToCart,
	removeItemFromCart,
} from '../../redux/cart/cartActions';

const CheckoutItemContainer = styled.div`
	width: 100%;
	display: flex;
	min-height: 6.25rem;
	border-bottom: 1px solid darkgrey;
	padding: 0.9rem 0;
	font-size: 1.25rem;
	align-items: center;

	@media screen and (max-width: 50rem) {
		font-size: 1rem;
	}
`;

const ImageContainer = styled.div`
	width: 23%;
	padding-right: 0.9rem;

	img {
		display: block;
		width: 100%;
		height: 100%;
	}
`;

const quantityStyles = css`
	display: flex;

	div {
		cursor: pointer;
	}

	span {
		margin: 0 0.6rem;
	}

	@media screen and (max-width: 50rem) {
		justify-content: center;
		width: 30%;
	}
`;

const CheckoutProp = styled.span`
	width: 23%;
	${({ isQuantity }) => isQuantity && quantityStyles}
`;

const RemoveButton = styled.div`
	padding-left: 0.75rem;
	cursor: pointer;
`;

const CheckoutItem = ({ item }) => {
	const { imageUrl, name, price, quantity } = item;
	const dispatch = useDispatch();

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt='Cart Item' />
			</ImageContainer>
			<CheckoutProp>{name}</CheckoutProp>
			<CheckoutProp isQuantity>
				<div onClick={() => dispatch(removeItemFromCart(item))}>&#10094;</div>
				<span>{quantity}</span>
				<div onClick={() => dispatch(addItemToCart(item))}>&#10095;</div>
			</CheckoutProp>
			<CheckoutProp>${price}</CheckoutProp>
			<RemoveButton onClick={() => dispatch(clearItemFromCart(item))}>
				&#10005;
			</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default React.memo(CheckoutItem);
