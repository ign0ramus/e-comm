import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverviewContainer from '../../components/CollectionsOverview/CollectionsOverview.container';
import CollectionContainer from '../Collection/Collection.container';

import { fetchCollectionsStart } from '../../redux/shop/shopActions';

const Shop = ({ fetchCollections, match }) => {
	useEffect(() => {
		fetchCollections();
	}, [fetchCollections]);

	return (
		<div>
			<Route
				exact
				path={`${match.path}`}
				component={CollectionOverviewContainer}
			/>
			<Route
				exact
				path={`${match.path}/:collectionId`}
				component={CollectionContainer}
			/>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	fetchCollections: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(Shop);
