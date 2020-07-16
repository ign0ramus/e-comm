import React, { useEffect } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CollectionOverview from '../../components/CollectionsOverview/CollectionsOverview.component';
import Collection from '../Collection/Collection.component';

import { fetchCollectionsStart } from '../../redux/shop/shopActions';

const Shop = () => {
	const match = useRouteMatch();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCollectionsStart());
	}, [dispatch]);

	return (
		<div>
			<Route exact path={`${match.path}`} component={CollectionOverview} />
			<Route
				exact
				path={`${match.path}/:collectionId`}
				component={Collection}
			/>
		</div>
	);
};

export default Shop;
