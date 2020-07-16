import React from 'react';
import { useSelector } from 'react-redux';

import { selectCollectionsFetching } from '../../redux/shop/shopSelectors';
import WithSpinner from '../../hocs/WithSpinner/WithSpinner.component';
import CollectionsOverview from './CollectionsOverview.component';

const WithSpinnerCollectionsOverview = WithSpinner(CollectionsOverview);

const CollectionsOverviewContainer = (props) => {
	const isLoading = useSelector(selectCollectionsFetching);

	return <WithSpinnerCollectionsOverview isLoading={isLoading} {...props} />;
};

export default CollectionsOverviewContainer;
