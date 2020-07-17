import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import styled from 'styled-components';

const Content = styled.div`
	height: 5.6rem;
	padding: 0 1.6rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid #000;
	background-color: #fff;
	opacity: 0.7;
	text-transform: uppercase;
`;

const MenuItemContainer = styled(Link)`
	min-width: 30%;
	height: ${({ size }) => {
		if (!size) {
			return '15rem';
		}
		if (size === 'large') {
			return '23.75rem';
		}
	}};
	background-image: url(${({ background }) => background});
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid #000;
	margin: 0 0.5rem 0.9rem;
	position: relative;
	background-position: center center;
	background-size: cover;
	overflow: hidden;
	cursor: pointer;

	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background-image: inherit;
		background-position: center;
		background-size: cover;
		transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
	}

	&:hover,
	&:focus {
		&::before {
			transform: scale(1.1);
		}
		${Content} {
			opacity: 0.9;
		}
	}

	@media screen and (max-width: 50rem) {
		height: 12.5rem;
	}
`;

const Title = styled.h1`
	font-weight: bold;
	margin-bottom: 0.4rem;
	font-size: 1.4rem;
	color: #4a4a4a;
`;

const Subtitle = styled.span`
	font-weight: lighter;
	font-size: 1rem;
`;

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
	const match = useRouteMatch();
	return (
		<MenuItemContainer
			size={size}
			background={imageUrl}
			to={`${match.url}shop/${linkUrl}`}
		>
			<Content>
				<Title>{title}</Title>
				<Subtitle>Shop now</Subtitle>
			</Content>
		</MenuItemContainer>
	);
};

export default MenuItem;
