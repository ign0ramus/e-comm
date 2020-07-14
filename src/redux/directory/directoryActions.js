import {
	FETCH_DIRECTORIES_START,
	FETCH_DIRECTORIES_SUCCESS,
	FETCH_DIRECTORIES_FAIL,
} from './directoryTypes';

import {
	firestore,
	convertDirectoriesSnapshotToArray,
} from '../../firebase/firebase.utils';

const fetchDirectoriesStart = () => ({
	type: FETCH_DIRECTORIES_START,
});

const fetchDirectoriesSuccess = (directories) => ({
	type: FETCH_DIRECTORIES_SUCCESS,
	payload: directories,
});

const fetchDirectoriesFail = (errorMsg) => ({
	type: FETCH_DIRECTORIES_FAIL,
	payload: errorMsg,
});

export const fetchDirectoriesAsync = () => (dispatch) => {
	dispatch(fetchDirectoriesStart());
	const collectionRef = firestore.collection('directories');
	collectionRef
		.get()
		.then((snapshot) => {
			const directories = convertDirectoriesSnapshotToArray(snapshot);
			dispatch(fetchDirectoriesSuccess(directories));
		})
		.catch((err) => dispatch(fetchDirectoriesFail(err.message)));
};
