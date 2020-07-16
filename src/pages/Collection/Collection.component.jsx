import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { selectCollection } from '../../redux/shop/shopSelectors';
import CollectionItem from '../../components/CollectionItem/CollectionItem.component';

const StyledCollectionItem = styled(CollectionItem)`
	margin-bottom: 30px;
`;

const CollectionContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const Title = styled.h2`
	font-size: 38px;
	margin: 0 auto 30px;
`;

const Items = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 10px;
`;

const Collection = () => {
	const { collectionId } = useParams();

	const collection = useSelector((state) =>
		selectCollection(collectionId)(state)
	);

	const { title, items } = collection;

	return (
		<CollectionContainer>
			<Title>{title}</Title>
			<Items>
				{items.map((item) => (
					<StyledCollectionItem key={item.id} item={item} />
				))}
			</Items>
		</CollectionContainer>
	);
};

export default Collection;
