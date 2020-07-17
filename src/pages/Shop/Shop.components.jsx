import React, { useEffect, lazy, Suspense } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shopActions';
import Spinner from '../../components/Spinner/Spinner.component';

const CollectionOverview = lazy(() =>
	import('../../components/CollectionsOverview/CollectionsOverview.component')
);
const Collection = lazy(() => import('../Collection/Collection.component'));

const Shop = () => {
	const match = useRouteMatch();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCollectionsStart());
	}, [dispatch]);

	return (
		<div>
			<Suspense fallback={<Spinner />}>
				<Route exact path={`${match.path}`} component={CollectionOverview} />
				<Route
					exact
					path={`${match.path}/:collectionId`}
					component={Collection}
				/>
			</Suspense>
		</div>
	);
};

export default Shop;
