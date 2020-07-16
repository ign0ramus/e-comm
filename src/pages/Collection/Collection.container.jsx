import React from 'react';
import { useSelector } from 'react-redux';

import { selectIsCollectionsLoaded } from '../../redux/shop/shopSelectors';
import WithSpinner from '../../hocs/WithSpinner/WithSpinner.component';
import Collection from './Collection.component';

const WithSpinnerCollection = WithSpinner(Collection);

const CollectionContainer = (props) => {
	const isLoading = useSelector((state) => !selectIsCollectionsLoaded(state));

	return <WithSpinnerCollection {...props} isLoading={isLoading} />;
};

export default CollectionContainer;
