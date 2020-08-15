import React from 'react';
import styled from 'styled-components';

import CollectionPreviewPlaceholder from '../CollectionPreviewPlaceholder/CollectionPreviewPlaceholder.component';

const OverviewPlaceholderContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const CollectionOverviewPlaceholder = () => {
	const placeholders = [];

	for (let i = 0; i < 5; i++) {
		placeholders.push(<CollectionPreviewPlaceholder key={i} />);
	}

	return (
		<OverviewPlaceholderContainer>{placeholders}</OverviewPlaceholderContainer>
	);
};

export default CollectionOverviewPlaceholder;
