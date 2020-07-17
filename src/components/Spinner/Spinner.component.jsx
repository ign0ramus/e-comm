import React from 'react';
import styled from 'styled-components';

export const SpinnerOverlay = styled.div`
	height: 60vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SpinnerContainer = styled.div`
	display: inline-block;
	width: 3.1rem;
	height: 3.1rem;
	border: 3px solid rgba(195, 195, 195, 0.6);
	border-radius: 50%;
	border-top-color: #636767;
	animation: spin 1s ease-in-out infinite;
	-webkit-animation: spin 1s ease-in-out infinite;
	@keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
		}
	}
`;

const Spinner = () => (
	<SpinnerOverlay>
		<SpinnerContainer />
	</SpinnerOverlay>
);

export default Spinner;
