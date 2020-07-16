import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import DirectoryContainer from '../../components/Directory/Directory.container';
import { fetchDirectoriesStart } from '../../redux/directory/directoryActions';

const HomepageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Home = ({ fetchDirectories }) => {
	useEffect(() => {
		fetchDirectories();
	}, [fetchDirectories]);

	return (
		<HomepageContainer>
			<DirectoryContainer />
		</HomepageContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	fetchDirectories: () => dispatch(fetchDirectoriesStart()),
});

export default connect(null, mapDispatchToProps)(Home);
