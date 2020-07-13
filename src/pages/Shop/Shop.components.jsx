import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/CollectionsOverview/CollectionsOverview.component';
import Collection from '../Collection/Collection.component';

const Shop = ({ match }) => (
	<div className='shop'>
		<Route exact path={`${match.path}`} component={CollectionOverview} />
		<Route exact path={`${match.path}/:collectionId`} component={Collection} />
	</div>
);

export default Shop;
