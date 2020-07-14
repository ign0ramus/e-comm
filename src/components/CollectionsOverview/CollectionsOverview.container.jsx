import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionsFetching } from '../../redux/shop/shopSelectors';
import WithSpinner from '../../hocs/WithSpinner/WithSpinner.component';
import CollectionsOverview from './CollectionsOverview.component';

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionsFetching,
});

export default compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionsOverview);
