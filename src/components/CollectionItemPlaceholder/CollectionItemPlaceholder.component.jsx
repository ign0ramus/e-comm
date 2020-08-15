import React from 'react';
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

const StyledContentLoader = styled(ContentLoader)`
	width: 22vw;
	height: 21.9rem;
	margin-bottom: 1.9rem;

	@media screen and (max-width: 50rem) {
		width: 40vw;
	}
`;

const MenuItemPlaceholder = (props) => (
	<StyledContentLoader speed={2} {...props}>
		<rect x='0' y='0' rx='5' ry='5' width='400' height='333' />
		<rect x='0' y='343' rx='5' ry='5' width='400' height='10' />
	</StyledContentLoader>
);

export default MenuItemPlaceholder;
