import { takeLatest, call, put } from 'redux-saga/effects';

import { FETCH_COLLECTIONS_START } from './shopTypes';
import { fetchCollectionsSuccess, fetchCollectionsFail } from './shopActions';

import {
	firestore,
	convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

export function* fetchCollectionsAsync() {
	try {
		const collectionRef = firestore.collection('collections');
		const snapshot = yield collectionRef.get();
		const collections = yield call(convertCollectionsSnapshotToMap, snapshot);

		yield put(fetchCollectionsSuccess(collections));
	} catch (err) {
		yield put(fetchCollectionsFail(err.message));
	}
}

export function* watchFetchCollectionsStart() {
	yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
