import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput.component';
import Button from '../Button/Button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './SignIn.styles.scss';

class SignIn extends Component {
	state = {
		email: '',
		password: '',
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (err) {
			console.error(err);
		}
	};

	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	handleSumbitWithGoogle = async (e) => {
		e.preventDefault();
		try {
			await signInWithGoogle();
		} catch (err) {
			console.error(err);
		}
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
