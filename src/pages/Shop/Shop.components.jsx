import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverviewContainer from '../../components/CollectionsOverview/CollectionsOverview.container';
import CollectionContainer from '../Collection/Collection.container';

import { fetchCollectionsStartAsync } from '../../redux/shop/shopActions';

class Shop extends Component {
	componentDidMount() {
		this.props.fetchCollections();
	}

	render() {
		const { match } = this.props;

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
					component={CollectionContainer}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	fetchCollections: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(Shop);
