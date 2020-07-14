import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Directory from './Directory.component';
import WithSpinner from '../../hocs/WithSpinner/WithSpinner.component';

import { selectSectionsIsLoaded } from '../../redux/directory/directorySelectors';

const mapStateToProps = createStructuredSelector({
	isLoading: (state) => !selectSectionsIsLoaded(state),
});

export default compose(connect(mapStateToProps), WithSpinner)(Directory);
