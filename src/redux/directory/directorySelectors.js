import { createSelector } from 'reselect';

const selectDirectory = (state) => state.directory;

export const selectSections = createSelector(
	[selectDirectory],
	(directory) => directory.sections
);

export const selectSectionsIsLoaded = createSelector(
	[selectDirectory],
	(directory) => !!directory.sections
);
