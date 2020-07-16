import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

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

const SignIn = () => {
	const [userCreds, setUserCreds] = useState({ email: '', password: '' });
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(emailSignInStart(userCreds.email, userCreds.password));
	};

	const signInWithGoogle = useCallback(() => {
		dispatch(googleSignInStart());
	}, [dispatch]);

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
					onChange={handleChange}
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

export default SignIn;
