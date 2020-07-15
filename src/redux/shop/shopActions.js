import {
	FETCH_COLLECTIONS_START,
	FETCH_COLLECTIONS_SUCCESS,
	FETCH_COLLECTIONS_FAIL,
} from './shopTypes';

import {
	firestore,
	convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
	type: FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collections) => ({
	type: FETCH_COLLECTIONS_SUCCESS,
	payload: collections,
});

export const fetchCollectionsFail = (errorMsg) => ({
	type: FETCH_COLLECTIONS_FAIL,
	payload: errorMsg,
});


// Fetch function for redux-thunk
export const fetchCollectionsStartAsync = () => (dispatch) => {
	dispatch(fetchCollectionsStart());

	const collectionRef = firestore.collection('collections');
	collectionRef
		.get()
		.then((snapshot) => {
			const collections = convertCollectionsSnapshotToMap(snapshot);
			dispatch(fetchCollectionsSuccess(collections));
		})
		.catch((err) => dispatch(fetchCollectionsFail(err.message)));
};
