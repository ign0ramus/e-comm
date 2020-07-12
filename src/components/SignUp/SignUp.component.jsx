import React, { Component } from 'react';
import { auth, createUserProfileDoc } from '../../firebase/firebase.utils';
import FormInput from '../FormInput/FormInput.component';
import Button from '../Button/Button.component';
import './SignUp.styles.scss';

const getInitialState = () => ({
	displayName: '',
	email: '',
	password: '',
});

class SignUp extends Component {
	state = getInitialState();

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		const { displayName, email, password } = this.state;
		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await createUserProfileDoc(user, { displayName });
			this.setState(getInitialState());
		} catch (err) {
			console.error(err);
		}
	};

	render() {
		const { displayName, email, password } = this.state;
		return (
			<div className='sign-up'>
				<h2 className='title'>I do not have an account</h2>
				<span>Sign up with your email and password</span>
				<form className='sign-up-form' onSubmit={this.handleSubmit}>
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
						label='Display Name'
						required
					/>
					<Button type='submit'>SIGN UP</Button>
				</form>
			</div>
		);
	}
}

export default SignUp;
