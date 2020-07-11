import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home.component';
import Shop from './pages/Shop/Shop.components';
import Header from './components/Header/Header.component';
import Auth from './pages/Auth/Auth.component';
import './App.css';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/shop' component={Shop} />
				<Route path='/auth' component={Auth} />
			</Switch>
		</div>
	);
}

export default App;
