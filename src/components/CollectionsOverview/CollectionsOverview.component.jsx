import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors';
import CollectionPreview from '../CollectionPreview/CollectionPreview.component';

const OverviewContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const CollectionsOverview = ({ collections }) => (
	<OverviewContainer>
		{collections.map(({ id, title, items }) => (
			<CollectionPreview key={id} title={title} items={items} />
		))}
	</OverviewContainer>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
