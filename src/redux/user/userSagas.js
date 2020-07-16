import { takeLatest, put, all, call } from 'redux-saga/effects';

import {
	GOOGLE_SIGN_IN_START,
	EMAIL_SIGN_IN_START,
	CHECK_USER_SESSION,
	SIGN_OUT_START,
} from './userTypes';
import {
	signInSuccess,
	signInFail,
	signOutSuccess,
	signOutFail,
} from './userActions';

import {
	googleProvider,
	auth,
	createUserProfileDoc,
	getCurrentUser,
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

export function* checkUserSession() {
	try {
		const userAuth = yield getCurrentUser();
		if (userAuth) {
			yield getSnapshotFromUserAuth(userAuth);
		}
	} catch (err) {
		put(signInFail(err.message));
	}
}

export function* watchCheckUserSession() {
	yield takeLatest(CHECK_USER_SESSION, checkUserSession);
}

export function* signOut() {
	try {
		yield auth.signOut();
		yield put(signOutSuccess());
	} catch (err) {
		yield put(signOutFail(err.message));
	}
}

export function* watchSignOut() {
	yield takeLatest(SIGN_OUT_START, signOut);
}

export function* userSagas() {
	yield all([
		call(watchGoogleSignInStart),
		call(watchEmailSignInStart),
		call(watchCheckUserSession),
		call(watchSignOut),
	]);
}
