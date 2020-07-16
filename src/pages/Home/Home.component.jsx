import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import DirectoryContainer from '../../components/Directory/Directory.container';
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
			<DirectoryContainer />
		</HomepageContainer>
	);
};

export default Home;
