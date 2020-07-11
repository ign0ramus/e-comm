import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput.component';
import Button from '../Button/Button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './SignIn.styles.scss';

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

	handleSumbitWithGoogle = (e) => {
		e.preventDefault();
		signInWithGoogle();
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
					<div className='btn-container'>
						<Button type='submit'>Sign in</Button>
						<Button isGoogle onClick={this.handleSumbitWithGoogle}>
							Sign in with Google
						</Button>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
