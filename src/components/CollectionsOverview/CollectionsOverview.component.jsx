import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import {
	selectCollectionsForPreview,
	selectCollectionsFetching,
} from '../../redux/shop/shopSelectors';

import CollectionPreview from '../CollectionPreview/CollectionPreview.component';
import Spinner from '../Spinner/Spinner.component';

const OverviewContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const CollectionsOverview = () => {
	const collections = useSelector(selectCollectionsForPreview);
	const isLoading = useSelector(selectCollectionsFetching);

	return isLoading ? (
		<Spinner />
	) : (
		<OverviewContainer>
			{collections.map(({ id, title, items }) => (
				<CollectionPreview key={id} title={title} items={items} />
			))}
		</OverviewContainer>
	);
};

export default CollectionsOverview;
