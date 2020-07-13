import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import MenuItem from '../MenuItem/MenuItem.component';
import { selectSections } from '../../redux/directory/directorySelectors';

const DirectoryMenu = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const Directory = ({ sections }) => (
	<DirectoryMenu>
		{sections.map(({ id, ...otherSectionProps }) => (
			<MenuItem key={id} {...otherSectionProps} />
		))}
	</DirectoryMenu>
);

const mapStateToProps = createStructuredSelector({
	sections: selectSections,
});

export default connect(mapStateToProps)(Directory);
