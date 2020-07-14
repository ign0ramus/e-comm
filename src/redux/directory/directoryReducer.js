import {
	FETCH_DIRECTORIES_START,
	FETCH_DIRECTORIES_SUCCESS,
	FETCH_DIRECTORIES_FAIL,
} from './directoryTypes';

const INITIAL_STATE = {
	sections: null,
	isLoading: false,
	errorMsg: null,
};

const directoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_DIRECTORIES_START:
			return { ...state, isLoading: true };
		case FETCH_DIRECTORIES_SUCCESS:
			return {
				...state,
				isLoading: false,
				sections: action.payload,
			};
		case FETCH_DIRECTORIES_FAIL:
			return {
				...state,
				isLoading: false,
				errorMsg: action.payload,
			};
		default:
			return state;
	}
};

export default directoryReducer;
