import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import Button from '../Button/Button.component';
import { addItemToCart } from '../../redux/cart/cartActions.js';

const StyledButton = styled(Button)`
	width: 80%;
	opacity: 0.7;
	position: absolute;
	top: 255px;
	visibility: hidden;
`;

const Image = styled.img`
	display: block;
	width: 100%;
	height: 95%;
	object-fit: cover;
	object-position: center;
	margin-bottom: 5px;
`;

const CollectionItemContainer = styled.div`
	width: 22vw;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;
	margin-bottom: 30px;

	&:hover {
		${Image} {
			opacity: 0.8;
		}

		${StyledButton} {
			visibility: visible;
		}
	}
`;

const Footer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	font-size: 18px;
`;

const Name = styled.span`
	width: 90%;
	margin-bottom: 15px;
`;

const Price = styled.span`
	width: 10%;
`;

const CollectionItem = ({ item }) => {
	const { imageUrl, name, price } = item;
	const dispatch = useDispatch();

	return (
		<CollectionItemContainer>
			<Image src={imageUrl} alt={name} />
			<Footer>
				<Name>{name}</Name>
				<Price>${price}</Price>
			</Footer>
			<StyledButton onClick={() => dispatch(addItemToCart(item))} inverted>
				ADD TO CART
			</StyledButton>
		</CollectionItemContainer>
	);
};

export default CollectionItem;
