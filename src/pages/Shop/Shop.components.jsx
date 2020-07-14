import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionOverviewContainer from '../../components/CollectionsOverview/CollectionsOverview.container';
import Collection from '../Collection/Collection.component';
import WithSpinner from '../../hocs/WithSpinner/WithSpinner.component';

import { fetchCollectionsStartAsync } from '../../redux/shop/shopActions';
import { selectIsCollectionsLoaded } from '../../redux/shop/shopSelectors';

const CollectionWithSpinner = WithSpinner(Collection);

class Shop extends Component {
	componentDidMount() {
		this.props.fetchCollections();
	}

	render() {
		const { match, isCollectionsLoaded } = this.props;

		return (
			<div className='shop'>
				<Route
					exact
					path={`${match.path}`}
					component={CollectionOverviewContainer}
				/>
				<Route
					exact
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionWithSpinner
							isLoading={!isCollectionsLoaded}
							{...props}
						/>
					)}
				/>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	isCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
	fetchCollections: () => dispatch(fetchCollectionsStartAsync),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
