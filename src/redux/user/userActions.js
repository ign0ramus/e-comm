import {
	SET_USER,
	GOOGLE_SIGN_IN_START,
	SIGN_IN_SUCCESS,
	SIGN_IN_FAIL,
	EMAIL_SIGN_IN_START,
	CHECK_USER_SESSION,
} from './userTypes';

export const setUser = (user) => ({
	type: SET_USER,
	payload: user,
});

export const googleSignInStart = () => ({
	type: GOOGLE_SIGN_IN_START,
});

export const signInSuccess = (user) => ({
	type: SIGN_IN_SUCCESS,
	payload: user,
});

export const signInFail = (errMsg) => ({
	type: SIGN_IN_FAIL,
	payload: errMsg,
});

export const emailSignInStart = (emailAndPass) => ({
	type: EMAIL_SIGN_IN_START,
	payload: emailAndPass,
});

export const checkUserSession = () => ({
	type: CHECK_USER_SESSION,
});
