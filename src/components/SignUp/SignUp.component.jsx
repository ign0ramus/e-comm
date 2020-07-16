import React, { Component } from 'react';
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

class SignUp extends Component {
	state = {
		displayName: '',
		email: '',
		password: '',
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { displayName, email, password } = this.state;
		this.props.signUp({ displayName, email, password });
	};

	render() {
		const { displayName, email, password } = this.state;
		return (
			<SignUpContainer>
				<Title>I do not have an account</Title>
				<span>Sign up with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='text'
						name='displayName'
						value={displayName}
						onChange={this.handleChange}
						label='Display Name'
						required
					/>
					<FormInput
						type='email'
						name='email'
						value={email}
						onChange={this.handleChange}
						label='Email'
						required
					/>
					<FormInput
						type='password'
						name='password'
						value={password}
						onChange={this.handleChange}
						label='Password'
						required
					/>
					<Button type='submit'>SIGN UP</Button>
				</form>
			</SignUpContainer>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	signUp: (signUpData) => dispatch(signUpStart(signUpData)),
});

export default connect(null, mapDispatchToProps)(SignUp);
