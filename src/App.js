import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import Header from './components/Header/Header.component';
import Spinner from './components/Spinner/Spinner.component';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.component';

import { selectUser } from './redux/user/userSelectors';
import { checkUserSession } from './redux/user/userActions';

const Home = lazy(() => import('./pages/Home/Home.component'));
const Shop = lazy(() => import('./pages/Shop/Shop.components'));
const Auth = lazy(() => import('./pages/Auth/Auth.component'));
const Checkout = lazy(() => import('./pages/Checkout/Checkout.component'));

const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
	}

	body {
		font-family: 'Open Sans Condensed', sans-serif;
		padding: 1.25rem 3.75rem;

		@media screen and (max-width: 50rem) {
			padding: 0.625rem;
		}
	}

	a {
		text-decoration: none;
		color: #000;
	}
`;

const App = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkUserSession());
	}, [dispatch]);

	return (
		<div>
			<GlobalStyles />
			<Header />
			<Switch>
				<ErrorBoundary>
					<Suspense fallback={<Spinner/>}>
						<Route exact path='/' component={Home} />
						<Route path='/shop' component={Shop} />
						<Route exact path='/checkout' component={Checkout} />
						<Route
							exact
							path='/auth'
							render={() => (user ? <Redirect to='/' /> : <Auth />)}
						/>
					</Suspense>
				</ErrorBoundary>
			</Switch>
		</div>
	);
};

export default App;
