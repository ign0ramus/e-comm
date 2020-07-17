import React from 'react';
import styled from 'styled-components';

import CollectionItem from '../CollectionItem/CollectionItem.component';

const PreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 1.9rem;

	@media screen and (max-width: 50rem) {
		align-items: center;
	}
`;

const Title = styled.h1`
	font-size: 1.75rem;
	margin-bottom: 1.6rem;
	text-transform: uppercase;
`;

const Preview = styled.div`
	display: flex;
	justify-content: space-between;

	@media screen and (max-width: 50rem) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 0.9rem;
	}
`;

const CollectionPreview = ({ title, items }) => (
	<PreviewContainer>
		<Title>{title}</Title>
		<Preview>
			{items.slice(0, 4).map((item) => (
				<CollectionItem key={item.id} item={item} />
			))}
		</Preview>
	</PreviewContainer>
);

export default CollectionPreview;
