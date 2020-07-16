import {
	GOOGLE_SIGN_IN_START,
	SIGN_IN_OR_SIGN_UP_SUCCESS,
	SIGN_IN_OR_SIGN_UP_FAIL,
	EMAIL_SIGN_IN_START,
	CHECK_USER_SESSION,
	SIGN_OUT_START,
	SIGN_OUT_SUCCESS,
	SIGN_OUT_FAIL,
	SIGN_UP_START,
} from './userTypes';

export const googleSignInStart = () => ({
	type: GOOGLE_SIGN_IN_START,
});

export const signInOrSignUpSuccess = (user) => ({
	type: SIGN_IN_OR_SIGN_UP_SUCCESS,
	payload: user,
});

export const signInOrSignUpFail = (errMsg) => ({
	type: SIGN_IN_OR_SIGN_UP_FAIL,
	payload: errMsg,
});

export const emailSignInStart = (emailAndPass) => ({
	type: EMAIL_SIGN_IN_START,
	payload: emailAndPass,
});

export const checkUserSession = () => ({
	type: CHECK_USER_SESSION,
});

export const signOutStart = () => ({
	type: SIGN_OUT_START,
});

export const signOutSuccess = () => ({
	type: SIGN_OUT_SUCCESS,
});

export const signOutFail = (errMsg) => ({
	type: SIGN_OUT_FAIL,
	payload: errMsg,
});

export const signUpStart = (signUpData) => ({
	type: SIGN_UP_START,
	payload: signUpData,
});
