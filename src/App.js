import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Home from './pages/Home/Home.component';
import Shop from './pages/Shop/Shop.components';
import Header from './components/Header/Header.component';
import Auth from './pages/Auth/Auth.component';
import Checkout from './pages/Checkout/Checkout.component';

import { selectUser } from './redux/user/userSelectors';
import { checkUserSession } from './redux/user/userActions';
import './App.css';

const App = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkUserSession());
	}, [dispatch]);

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
};

export default App;
