import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Home from './pages/Home/Home.component';
import Shop from './pages/Shop/Shop.components';
import Header from './components/Header/Header.component';
import Auth from './pages/Auth/Auth.component';
import Checkout from './pages/Checkout/Checkout.component';

import { selectUser } from './redux/user/userSelectors';
import { checkUserSession } from './redux/user/userActions';
import './App.css';

class App extends Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		this.props.checkUserSession();
	}

	render() {
		const { user } = this.props;
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/shop' component={Shop} />
					<Route exact path='/checkout' component={Checkout} />
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

const mapStateToProps = createStructuredSelector({
	user: selectUser,
});

const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
