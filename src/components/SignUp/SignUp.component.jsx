import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import FormInput from '../FormInput/FormInput.component';
import Button from '../Button/Button.component';

import { signUpStart } from '../../redux/user/userActions';

const SignUpContainer = styled.div`
	max-width: 23.75rem;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const Title = styled.h2`
	margin: 0.6rem 0;
`;

const SignUp = () => {
	const [userCreds, setUserCreds] = useState({
		displayName: '',
		email: '',
		password: '',
	});
	const dispatch = useDispatch();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserCreds({ ...userCreds, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { displayName, email, password } = userCreds;
		dispatch(signUpStart({ displayName, email, password }));
	};

	return (
		<SignUpContainer>
			<Title>I do not have an account</Title>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					type='text'
					name='displayName'
					value={userCreds.displayName}
					onChange={handleChange}
					label='Display Name'
					required
				/>
				<FormInput
					type='email'
					name='email'
					value={userCreds.email}
					onChange={handleChange}
					label='Email'
					required
				/>
				<FormInput
					type='password'
					name='password'
					value={userCreds.password}
					onChange={handleChange}
					label='Password'
					required
				/>
				<Button type='submit'>SIGN UP</Button>
			</form>
		</SignUpContainer>
	);
};

export default SignUp;
