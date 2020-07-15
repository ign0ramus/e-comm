import {
	SET_USER,
	GOOGLE_SIGN_IN_START,
	GOOGLE_SIGN_IN_SUCCESS,
	GOOGLE_SIGN_IN_FAIL,
	EMAIL_SIGN_IN_START,
	EMAIL_SIGN_IN_SUCCESS,
	EMAIL_SIGN_IN_FAIL,
} from './userTypes';

export const setUser = (user) => ({
	type: SET_USER,
	payload: user,
});

export const googleSignInStart = () => ({
	type: GOOGLE_SIGN_IN_START,
});

export const googleSignInSuccess = (user) => ({
	type: GOOGLE_SIGN_IN_SUCCESS,
	payload: user,
});

export const googleSignInFail = (errMsg) => ({
	type: GOOGLE_SIGN_IN_FAIL,
	payload: errMsg,
});

export const emailSignInStart = (emailAndPass) => ({
	type: EMAIL_SIGN_IN_START,
	payload: emailAndPass,
});

export const emailSignInSuccess = (user) => ({
	type: EMAIL_SIGN_IN_SUCCESS,
	payload: user,
});

export const emailSignInFail = (errMsg) => ({
	type: EMAIL_SIGN_IN_FAIL,
	payload: errMsg,
});
