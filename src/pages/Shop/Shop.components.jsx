import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from '../../components/CollectionsOverview/CollectionsOverview.component';
import Collection from '../Collection/Collection.component';
import WithSpinner from '../../hocs/WithSpinner/WithSpinner.component';

import {
	firestore,
	convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shopActions';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class Shop extends Component {
	state = {
		isLoading: true,
	};

	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;

		const collectionRef = firestore.collection('collections');
		collectionRef.onSnapshot(async (snapshot) => {
			const collections = await convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collections);
			this.setState({ isLoading: false });
		});
	}

	componentWillUnmount() {}

	render() {
		const { match } = this.props;
		const { isLoading } = this.state;

		return (
			<div className='shop'>
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
					)}
				/>
				<Route
					exact
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionWithSpinner isLoading={isLoading} {...props} />
					)}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collections) => dispatch(updateCollections(collections)),
});

export default connect(null, mapDispatchToProps)(Shop);
