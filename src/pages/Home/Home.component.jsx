import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import Directory from '../../components/Directory/Directory.component';
import { fetchDirectoriesStart } from '../../redux/directory/directoryActions';

const HomepageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchDirectoriesStart());
	}, [dispatch]);

	return (
		<HomepageContainer>
			<Directory />
		</HomepageContainer>
	);
};

export default Home;
