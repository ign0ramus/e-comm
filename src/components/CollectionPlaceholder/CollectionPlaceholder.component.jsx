import React from 'react';
import styled from 'styled-components';
import ContentLoader from 'react-content-loader';

import CollectionItemPlaceholder from '../CollectionItemPlaceholder/CollectionItemPlaceholder.component';

const CollectionItemsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 0.6rem;

	@media screen and (max-width: 50rem) {
		grid-template-columns: 1fr 1fr;
		grid-gap: 0.9rem;
	}
`;

const CollectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledContentLoader = styled(ContentLoader)`
	width: 9.3rem;
	height: 3.3rem;
	margin: 0 auto 1.9rem;
`;

const CollectionPlaceholder = () => {
	const placeholders = [];

	for (let i = 0; i < 8; i++) {
		placeholders.push(<CollectionItemPlaceholder key={i} />);
	}

	return (
		<CollectionContainer>
			<StyledContentLoader speed={2}>
				<rect x='0' y='0' rx='5' ry='5' width='100%' height='100%' />
			</StyledContentLoader>
			<CollectionItemsContainer>{placeholders}</CollectionItemsContainer>
		</CollectionContainer>
	);
};

export default CollectionPlaceholder;
