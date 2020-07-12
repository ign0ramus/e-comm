import React from 'react';

import SignIn from '../../components/SignIn/SignIn.components';
import SignUp from '../../components/SignUp/SignUp.component';
import './Auth.styles.scss';

const Auth = () => (
	<div className='auth'>
		<SignIn />
		<SignUp />
	</div>
);

export default Auth;
