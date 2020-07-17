import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import {
	selectCollection,
	selectIsCollectionsLoaded,
} from '../../redux/shop/shopSelectors';

import CollectionItem from '../../components/CollectionItem/CollectionItem.component';
import Spinner from '../../components/Spinner/Spinner.component';

const StyledCollectionItem = styled(CollectionItem)`
	margin-bottom: 1.9rem;
`;

const CollectionContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const Title = styled.h2`
	font-size: 2.4rem;
	margin: 0 auto 1.9rem;
`;

const Items = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 0.6rem;
`;

const Collection = () => {
	const { collectionId } = useParams();
	const isLoading = useSelector((state) => !selectIsCollectionsLoaded(state));

	const collection = useSelector((state) =>
		selectCollection(collectionId)(state)
	);

	return isLoading ? (
		<Spinner />
	) : (
		<CollectionContainer>
			<Title>{collection.title}</Title>
			<Items>
				{collection.items.map((item) => (
					<StyledCollectionItem key={item.id} item={item} />
				))}
			</Items>
		</CollectionContainer>
	);
};

export default Collection;
