import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import FormInput from '../FormInput/FormInput.component';
import Button from '../Button/Button.component';

import { signUpStart } from '../../redux/user/userActions';

const SignUpContainer = styled.div`
	max-width: 380px;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const Title = styled.h2`
	margin: 10px 0;
`;

const SignUp = ({ signUp }) => {
	const [userCreds, setUserCreds] = useState({
		displayName: '',
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserCreds({ ...userCreds, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { displayName, email, password } = userCreds;
		signUp({ displayName, email, password });
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

const mapDispatchToProps = (dispatch) => ({
	signUp: (signUpData) => dispatch(signUpStart(signUpData)),
});

export default connect(null, mapDispatchToProps)(SignUp);
