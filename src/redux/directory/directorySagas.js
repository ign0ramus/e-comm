import { takeLatest, all, call, put } from 'redux-saga/effects';

import { FETCH_DIRECTORIES_START } from './directoryTypes';
import {
	fetchDirectoriesSuccess,
	fetchDirectoriesFail,
} from './directoryActions';
import {
	firestore,
	convertDirectoriesSnapshotToArray,
} from '../../firebase/firebase.utils';

export function* fetchDirectoriesAsync() {
	try {
		const directoriesRef = firestore.collection('directories');
		const snapshot = yield directoriesRef.get();
		const directories = yield call(convertDirectoriesSnapshotToArray, snapshot);

		yield put(fetchDirectoriesSuccess(directories));
	} catch (err) {
		yield put(fetchDirectoriesFail(err.message));
	}
}

export function* watchFetchDirectoryStart() {
	yield takeLatest(FETCH_DIRECTORIES_START, fetchDirectoriesAsync);
}

export function* directorySagas() {
	yield all([call(watchFetchDirectoryStart)]);
}
