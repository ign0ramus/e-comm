import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors';
import CollectionPreview from '../CollectionPreview/CollectionPreview.component';

const OverviewContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const CollectionsOverview = () => {
	const collections = useSelector(selectCollectionsForPreview);

	return (
		<OverviewContainer>
			{collections.map(({ id, title, items }) => (
				<CollectionPreview key={id} title={title} items={items} />
			))}
		</OverviewContainer>
	);
};

export default CollectionsOverview;
