import React from 'react';
import { useSelector } from 'react-redux';

import Directory from './Directory.component';
import WithSpinner from '../../hocs/WithSpinner/WithSpinner.component';

import { selectSectionsIsLoaded } from '../../redux/directory/directorySelectors';

const WithSpinnerDirectory = WithSpinner(Directory);

const DirectoryContainer = (props) => {
	const isLoading = useSelector((state) => !selectSectionsIsLoaded(state));

	return <WithSpinnerDirectory {...props} isLoading={isLoading} />;
};

export default DirectoryContainer;
