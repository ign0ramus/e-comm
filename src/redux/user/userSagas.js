import { takeLatest, put, all, call } from 'redux-saga/effects';

import { GOOGLE_SIGN_IN_START, EMAIL_SIGN_IN_START } from './userTypes';
import { signInSuccess, signInFail } from './userActions';

import {
	googleProvider,
	auth,
	createUserProfileDoc,
} from '../../firebase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth) {
	try {
		const userRef = yield call(createUserProfileDoc, userAuth);
		const userSnapshot = yield userRef.get();
		yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
	} catch (err) {
		yield put(signInFail(err.message));
	}
}

export function* signInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		yield getSnapshotFromUserAuth(user);
	} catch (err) {
		yield put(signInFail(err.message));
	}
}

export function* watchGoogleSignInStart() {
	yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithEmail({ payload: { email, password } }) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		yield getSnapshotFromUserAuth(user);
	} catch (err) {
		yield put(signInFail(err.message));
	}
}

export function* watchEmailSignInStart() {
	yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* userSagas() {
	yield all([call(watchGoogleSignInStart), call(watchEmailSignInStart)]);
}
