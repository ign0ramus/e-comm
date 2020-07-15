import { SIGN_IN_SUCCESS, SIGN_IN_FAIL } from './userTypes';

const INITIAL_STATE = {
	user: null,
	error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SIGN_IN_SUCCESS:
			return {
				...state,
				user: action.payload,
				error: null,
			};
		case SIGN_IN_FAIL:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
