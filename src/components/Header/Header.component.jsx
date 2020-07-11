import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './Header.styles.scss';

const Header = () => (
	<header className='header'>
		<Link to='/' className='logo-container'>
			<Logo className='logo' />
		</Link>
		<nav className='options'>
			<Link to='/shop' className='option'>
				SHOP
			</Link>
			<Link to='/contact' className='option'>
				CONTACT
			</Link>
		</nav>
	</header>
);

export default Header;
