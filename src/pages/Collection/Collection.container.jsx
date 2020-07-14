import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from '../../redux/shop/shopSelectors';
import WithSpinner from '../../hocs/WithSpinner/WithSpinner.component';
import Colletion from './Collection.component';

const mapStateToProps = createStructuredSelector({
	isLoading: (state) => !selectIsCollectionsLoaded(state),
});

export default compose(connect(mapStateToProps), WithSpinner)(Colletion);
