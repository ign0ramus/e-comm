import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { ReactComponent as Icon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cartActions.js';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors.js';

const CartIconContainer = styled.div`
	width: 45px;
	height: 45px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

const StyledIcon = styled(Icon)`
	width: 24px;
	height: 24px;
`;

const ItemCount = styled.span`
	position: absolute;
	font-size: 10px;
	font-weight: bold;
	bottom: 12px;
`;

const CartIcon = () => {
	const itemsCount = useSelector(selectCartItemsCount);
	const dispatch = useDispatch();

	return (
		<CartIconContainer onClick={() => dispatch(toggleCartHidden())}>
			<StyledIcon />
			<ItemCount>{itemsCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
