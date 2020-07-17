import React, { Component } from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
	font-size: 3.75rem;
	color: red;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	span {
		display: block;
	}

	@media screen and (max-width: 50rem) {
		font-size: 2rem;
	}
`;

const Image = styled.img`
	display: block;
	width: 30%;

	@media screen and (max-width: 50rem) {
		width: 50%;
	}
`;

class ErrorBoundary extends Component {
	state = {
		hasError: false,
	};

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	componentDidCatch(error, info) {
		console.error(error);
		console.log(info);
	}

	render() {
		const { hasError } = this.state;
		const { children } = this.props;

		return hasError ? (
			<ErrorContainer>
				<Image src='https://i.imgur.com/lKJiT77.png' />
				<span>Ooops!</span>
				<span>A Dog ate this page!</span>
				<span>:(</span>
			</ErrorContainer>
		) : (
			children
		);
	}
}

export default ErrorBoundary;
