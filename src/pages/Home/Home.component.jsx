import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import DirectoryContainer from '../../components/Directory/Directory.container';
import { fetchDirectoriesAsync } from '../../redux/directory/directoryActions';

const HomepageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

class Home extends Component {
	componentDidMount() {
		this.props.fetchDirectories();
	}

	render() {
		return (
			<HomepageContainer>
				<DirectoryContainer />
			</HomepageContainer>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	fetchDirectories: () => dispatch(fetchDirectoriesAsync()),
});

export default connect(null, mapDispatchToProps)(Home);
