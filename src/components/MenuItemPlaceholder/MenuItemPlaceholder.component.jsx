import React from 'react';
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

const StyledContentLoader = styled(({ isLarge, ...rest }) => (
	<ContentLoader {...rest} />
))`
	min-width: 30%;
	flex: 1 1 auto;
	margin: 0 0.5rem 0.9rem;
	height: ${({ isLarge }) => (isLarge ? '23.75rem' : '15rem')};

	@media screen and (max-width: 50rem) {
		height: 12.5rem;
	}
`;

const MenuItemPlaceholder = (props) => (
	<StyledContentLoader speed={2} {...props}>
		<rect x='0' y='0' rx='5' ry='5' width='100%' height='100%' />
	</StyledContentLoader>
);

export default MenuItemPlaceholder;
