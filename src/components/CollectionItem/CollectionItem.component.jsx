import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import Button from '../Button/Button.component';
import CollectionItemPlaceholder from '../CollectionItemPlaceholder/CollectionItemPlaceholder.component';
import { addItemToCart } from '../../redux/cart/cartActions.js';

const StyledButton = styled(Button)`
	width: 80%;
	opacity: 0.7;
	position: absolute;
	top: 15.9rem;
	visibility: hidden;

	@media screen and (max-width: 50rem) {
		visibility: visible;
		opacity: 0.9;
		min-width: unset;
		padding: 0 0.6rem;
	}
`;

const BackImage = styled.img`
	display: block;
	width: 100%;
	height: 95%;
	object-fit: cover;
	object-position: center;
	margin-bottom: 0.3rem;
`;

const CollectionItemContainer = styled.div`
	width: 22vw;
	display: flex;
	flex-direction: column;
	height: 21.9rem;
	align-items: center;
	position: relative;
	margin-bottom: 1.9rem;

	&:hover {
		${BackImage} {
			opacity: 0.8;
		}

		${StyledButton} {
			visibility: visible;
		}
	}

	@media screen and (max-width: 50rem) {
		width: 40vw;

		&:hover {
			${BackImage} {
				opacity: unset;
			}
		}
	}
`;

const Footer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	font-size: 1.1rem;
`;

const Name = styled.span`
	width: 90%;
	margin-bottom: 0.9rem;
`;

const CollectionItem = ({ item }) => {
	const { imageUrl, name, price } = item;
	const [image, setImage] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		const img = new Image();
		img.onload = () => {
			setImage(img);
		};
		img.src = imageUrl;
	}, [imageUrl]);

	return image ? (
		<CollectionItemContainer>
			<BackImage src={imageUrl} alt={name} />
			<Footer>
				<Name>{name}</Name>
				<div>${price}</div>
			</Footer>
			<StyledButton onClick={() => dispatch(addItemToCart(item))} inverted>
				ADD TO CART
			</StyledButton>
		</CollectionItemContainer>
	) : (
		<CollectionItemPlaceholder />
	);
};

export default CollectionItem;
