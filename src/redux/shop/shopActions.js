import { UPDATE_COLLECTIONS } from './shopTypes';

export const updateCollections = (collections) => ({
	type: UPDATE_COLLECTIONS,
	payload: collections,
});
