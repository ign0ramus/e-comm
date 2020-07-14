import React from 'react';
import styled from 'styled-components';

import CollectionItem from '../CollectionItem/CollectionItem.component';

const PreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
`;

const Title = styled.h1`
	font-size: 28px;
	margin-bottom: 25px;
	text-transform: uppercase;
`;

const Preview = styled.div`
	display: flex;
	justify-content: space-between;
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
