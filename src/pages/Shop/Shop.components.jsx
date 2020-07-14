import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from '../../components/CollectionsOverview/CollectionsOverview.component';
import Collection from '../Collection/Collection.component';
import {
	firestore,
	convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shopActions';

class Shop extends Component {
	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;

		const collectionRef = firestore.collection('collections');
		collectionRef.onSnapshot(async (snapshot) => {
			const collections = await convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collections);
		});
	}

	componentWillUnmount() {}

	render() {
		const { match } = this.props;

		return (
			<div className='shop'>
				<Route exact path={`${match.path}`} component={CollectionOverview} />
				<Route
					exact
					path={`${match.path}/:collectionId`}
					component={Collection}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collections) => dispatch(updateCollections(collections)),
});

export default connect(null, mapDispatchToProps)(Shop);
