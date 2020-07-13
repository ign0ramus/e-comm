import React from 'react';
import styled from 'styled-components';

import Directory from '../../components/Directory/Directory.component';

const HomepageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Home = () => (
	<HomepageContainer>
		<Directory />
	</HomepageContainer>
);

export default Home;
