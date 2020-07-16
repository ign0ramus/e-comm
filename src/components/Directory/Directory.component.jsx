import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import MenuItem from '../MenuItem/MenuItem.component';
import Spinner from '../Spinner/Spinner.component';

import {
	selectSections,
	selectSectionsIsLoaded,
} from '../../redux/directory/directorySelectors';

const DirectoryMenu = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const Directory = () => {
	const sections = useSelector(selectSections);
	const isLoading = useSelector((state) => !selectSectionsIsLoaded(state));

	return isLoading ? (
		<Spinner />
	) : (
		<DirectoryMenu>
			{sections.map(({ id, ...otherSectionProps }, idx) => (
				<MenuItem
					key={id}
					{...otherSectionProps}
					size={sections.length - idx <= 2 ? 'large' : ''}
				/>
			))}
		</DirectoryMenu>
	);
};

export default Directory;
