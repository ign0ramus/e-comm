import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

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

const Collection = ({ collection }) => {
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

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
