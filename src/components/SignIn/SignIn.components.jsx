import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput.component';
import './SignIn.styles.scss';
import Button from '../Button/Button.component';

class SignIn extends Component {
	state = {
		email: '',
		password: '',
	};

	handleSubmit = (e) => {
		e.preventDefault();
	};

	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		const { email, password } = this.state;

		return (
			<div className='sign-in'>
				<h2 className='title'>I already have an account</h2>
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
					<Button type='submit'>Sign in</Button>
				</form>
			</div>
		);
	}
}

export default SignIn;
