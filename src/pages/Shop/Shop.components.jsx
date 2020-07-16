import React, { useEffect } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CollectionOverviewContainer from '../../components/CollectionsOverview/CollectionsOverview.container';
import CollectionContainer from '../Collection/Collection.container';

import { fetchCollectionsStart } from '../../redux/shop/shopActions';

const Shop = () => {
	const match = useRouteMatch();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCollectionsStart());
	}, [dispatch]);

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

export default Shop;
