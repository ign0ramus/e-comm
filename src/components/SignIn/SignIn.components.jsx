import React, { Component } from 'react';
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

class SignIn extends Component {
	state = {
		email: '',
		password: '',
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = this.state;

		this.props.signInWithEmail(email, password);
	};

	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		const { email, password } = this.state;
		const { signInWithGoogle } = this.props;

		return (
			<SignInContainer>
				<Title>I already have an account</Title>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						onChange={this.handleChange}
						name='email'
						type='email'
						value={email}
						required
						label='Email'
					/>
					<FormInput
						onChange={this.handleChange}
						name='password'
						type='password'
						value={password}
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
	}
}

const mapDispatchToProps = (dispatch) => ({
	signInWithGoogle: () => dispatch(googleSignInStart()),
	signInWithEmail: (email, password) =>
		dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
