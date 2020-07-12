import { SET_USER } from './userTypes';

export const setUser = (user) => ({
	type: SET_USER,
	payload: user,
});
