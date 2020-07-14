import React from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';

import {
	clearItemFromCart,
	addItemToCart,
	removeItemFromCart,
} from '../../redux/cart/cartActions';

const CheckoutItemContainer = styled.div`
	width: 100%;
	display: flex;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;
`;

const ImageContainer = styled.div`
	width: 23%;
	padding-right: 15px;

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
		margin: 0 10px;
	}
`;

const CheckoutProp = styled.span`
	width: 23%;
	${(isQuantity) => isQuantity && quantityStyles}
`;

const RemoveButton = styled.div`
	padding-left: 12px;
	cursor: pointer;
`;

const CheckoutItem = ({
	item,
	clearItemFromCart,
	addItemToCart,
	removeItemFromCart,
}) => {
	const { imageUrl, name, price, quantity } = item;

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt='Cart Item' />
			</ImageContainer>
			<CheckoutProp>{name}</CheckoutProp>
			<CheckoutProp isQuantity>
				<div onClick={() => removeItemFromCart(item)}>&#10094;</div>
				<span>{quantity}</span>
				<div onClick={() => addItemToCart(item)}>&#10095;</div>
			</CheckoutProp>
			<CheckoutProp>{price}</CheckoutProp>
			<RemoveButton onClick={() => clearItemFromCart(item)}>
				&#10005;
			</RemoveButton>
		</CheckoutItemContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
	addItemToCart: (item) => dispatch(addItemToCart(item)),
	removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
