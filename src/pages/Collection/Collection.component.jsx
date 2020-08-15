import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import {
	selectCollection,
	selectIsCollectionsLoaded,
} from '../../redux/shop/shopSelectors';

import CollectionItem from '../../components/CollectionItem/CollectionItem.component';
import CollectionPlaceholder from '../../components/CollectionPlaceholder/CollectionPlaceholder.component';

const CollectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.h2`
	font-size: 2.4rem;
	margin: 0 auto 1.9rem;
`;

const Items = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 0.6rem;

	@media screen and (max-width: 50rem) {
		grid-template-columns: 1fr 1fr;
		grid-gap: 0.9rem;
	}
`;

const Collection = () => {
	const { collectionId } = useParams();
	const isLoading = useSelector((state) => !selectIsCollectionsLoaded(state));

	const collection = useSelector((state) =>
		selectCollection(collectionId)(state)
	);

	return isLoading ? (
		<CollectionPlaceholder />
	) : (
		<CollectionContainer>
			<Title>{collection.title}</Title>
			<Items>
				{collection.items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</Items>
		</CollectionContainer>
	);
};

export default Collection;
