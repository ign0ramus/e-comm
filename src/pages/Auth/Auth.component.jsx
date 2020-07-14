import React from 'react';
import styled from 'styled-components';

import SignIn from '../../components/SignIn/SignIn.components';
import SignUp from '../../components/SignUp/SignUp.component';

const AuthContainer = styled.div`
	max-width: 850px;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 30px auto;
`;

const Auth = () => (
	<AuthContainer>
		<SignIn />
		<SignUp />
	</AuthContainer>
);

export default Auth;
