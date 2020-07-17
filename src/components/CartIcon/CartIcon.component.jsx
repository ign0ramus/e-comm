import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { ReactComponent as Icon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cartActions.js';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors.js';

const CartIconContainer = styled.div`
	width: 2.8rem;
	height: 2.8rem;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

const StyledIcon = styled(Icon)`
	width: 1.5rem;
	height: 1.5rem;
`;

const ItemCount = styled.span`
	position: absolute;
	font-size: 0.6rem;
	font-weight: bold;
	bottom: 0.75rem;
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
