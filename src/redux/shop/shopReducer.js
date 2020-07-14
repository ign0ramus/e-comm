import {
	FETCH_COLLECTIONS_START,
	FETCH_COLLECTIONS_SUCCESS,
	FETCH_COLLECTIONS_FAIL,
} from './shopTypes';

const INITIAL_STATE = {
	collections: null,
	isFetching: false,
	errorMsg: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_COLLECTIONS_START:
			return {
				...state,
				isFetching: true,
			};
		case FETCH_COLLECTIONS_SUCCESS:
			return {
				...state,
				isFetching: false,
				collections: action.payload,
			};
		case FETCH_COLLECTIONS_FAIL:
			return {
				...state,
				isFetching: false,
				errorMsg: action.payload,
			};
		default:
			return state;
	}
};

export default shopReducer;
