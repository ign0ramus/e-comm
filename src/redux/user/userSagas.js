import { takeLatest, put, all, call } from 'redux-saga/effects';

import { GOOGLE_SIGN_IN_START, EMAIL_SIGN_IN_START } from './userTypes';
import {
	googleSignInSuccess,
	googleSignInFail,
	emailSignInSuccess,
	emailSignInFail,
} from './userActions';

import {
	googleProvider,
	auth,
	createUserProfileDoc,
} from '../../firebase/firebase.utils';

export function* signInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		const userRef = yield call(createUserProfileDoc, user);
		const userSnapshot = yield userRef.get();
		yield put(
			googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
		);
	} catch (err) {
		yield put(googleSignInFail(err.message));
	}
}

export function* watchGoogleSignInStart() {
	yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithEmail({ payload: { email, password } }) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		const userRef = yield call(createUserProfileDoc, user);
		const userSnapshot = yield userRef.get();
		yield put(
			emailSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
		);
	} catch (err) {
		yield put(emailSignInFail(err.message));
	}
}

export function* watchEmailSignInStart() {
	yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* userSagas() {
	yield all([call(watchGoogleSignInStart), call(watchEmailSignInStart)]);
}
