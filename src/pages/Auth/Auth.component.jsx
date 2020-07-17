import React from 'react';
import styled from 'styled-components';

import SignIn from '../../components/SignIn/SignIn.components';
import SignUp from '../../components/SignUp/SignUp.component';

const AuthContainer = styled.div`
	max-width: 53.1rem;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 1.9rem auto;
`;

const Auth = () => (
	<AuthContainer>
		<SignIn />
		<SignUp />
	</AuthContainer>
);

export default Auth;
