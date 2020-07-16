import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import FormInput from '../FormInput/FormInput.component';
import Button from '../Button/Button.component';
import {
	googleSignInStart,
	emailSignInStart,
} from '../../redux/user/userActions';

const SignInContainer = styled.div`
	max-width: 380px;
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
`;

const Title = styled.h1`
	margin: 10px 0;
`;

const BtnContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const SignIn = ({ signInWithEmail, signInWithGoogle }) => {
	const [userCreds, setUserCreds] = useState({ email: '', password: '' });

	const handleSubmit = (e) => {
		e.preventDefault();
		signInWithEmail(userCreds.email, userCreds.password);
	};

	const handleChange = (e) => {
		const { value, name } = e.target;
		setUserCreds({ ...userCreds, [name]: value });
	};

	return (
		<SignInContainer>
			<Title>I already have an account</Title>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					onChange={handleChange}
					name='email'
					type='email'
					value={userCreds.email}
					required
					label='Email'
				/>
				<FormInput
					onChange={this.handleChange}
					name='password'
					type='password'
					value={userCreds.password}
					required
					label='Password'
				/>
				<BtnContainer>
					<Button type='submit'>Sign in</Button>
					<Button type='button' isGoogle onClick={signInWithGoogle}>
						Sign in with Google
					</Button>
				</BtnContainer>
			</form>
		</SignInContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	signInWithGoogle: () => dispatch(googleSignInStart()),
	signInWithEmail: (email, password) =>
		dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
