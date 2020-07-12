import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './pages/Home/Home.component';
import Shop from './pages/Shop/Shop.components';
import Header from './components/Header/Header.component';
import Auth from './pages/Auth/Auth.component';
import { auth, createUserProfileDoc } from './firebase/firebase.utils';
import { setUser } from './redux/user/userActions';
import './App.css';

class App extends Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
			if (user) {
				const userRef = await createUserProfileDoc(user);
				userRef.onSnapshot((snapShot) => {
					setUser({
						currentUser: {
							id: snapShot.id,
							...snapShot.data(),
						},
					});
				});
			} else {
				setUser(null);
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		const { user } = this.props;
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/shop' component={Shop} />
					<Route
						exact
						path='/auth'
						render={() => (user ? <Redirect to='/' /> : <Auth />)}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
	setUser: (user) => dispatch(setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
