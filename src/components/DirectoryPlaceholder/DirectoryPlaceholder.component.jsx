import React from 'react';
import styled from 'styled-components';

import MenuItemPlaceholder from '../MenuItemPlaceholder/MenuItemPlaceholder.component';

const DirectoryMenuPlaceholder = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const DirectoryPlaceholder = () => {
	const placeholders = [];

	for (let i = 0; i < 5; i++) {
		placeholders.push(<MenuItemPlaceholder key={i} isLarge={i > 2} />);
	}

	return <DirectoryMenuPlaceholder>{placeholders}</DirectoryMenuPlaceholder>;
};

export default DirectoryPlaceholder;
