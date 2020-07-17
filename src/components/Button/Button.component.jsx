import React from 'react';
import styled, { css } from 'styled-components';

const normalButtonStyles = css`
	background-color: #000;
	color: #fff;
	border: 1px solid black;

	&:hover {
		background-color: #fff;
		color: #000;
		border: none;
	}
`;

const invertedButtonStyles = css`
	background-color: #fff;
	color: #000;
	border: none;

	&:hover {
		background-color: #000;
		color: #fff;
		border: 1px solid black;
	}
`;

const googleButtonStyles = css`
	background-color: #4285f4;
	color: #fff;

	&:hover {
		background-color: #357ae8;
		border: none;
	}
`;

const getButtonStyles = (props) => {
	if (props.isGoogle) {
		return googleButtonStyles;
	}

	return props.inverted ? invertedButtonStyles : normalButtonStyles;
};

const CustomButton = styled.button`
	min-width: 10.3rem;
	width: auto;
	height: 3.125rem;
	letter-spacing: 0.5px;
	line-height: 3.125rem;
	padding: 0 2.2rem 0 2.2rem;
	font-size: 0.9rem;
	text-transform: uppercase;
	font-family: 'Open Sans Condensed';
	font-weight: bolder;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;

	${getButtonStyles}
`;

const Button = ({ children, ...restProps }) => {
	return <CustomButton {...restProps}>{children}</CustomButton>;
};

export default Button;
