import {
	SIGN_IN_OR_SIGN_UP_SUCCESS,
	SIGN_IN_OR_SIGN_UP_FAIL,
	SIGN_OUT_SUCCESS,
	SIGN_OUT_FAIL,
} from './userTypes';

const INITIAL_STATE = {
	user: null,
	error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SIGN_IN_OR_SIGN_UP_SUCCESS:
			return {
				...state,
				user: action.payload,
				error: null,
			};
		case SIGN_OUT_SUCCESS:
			return {
				...state,
				user: null,
				error: null,
			};
		case SIGN_IN_OR_SIGN_UP_FAIL:
		case SIGN_OUT_FAIL:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
