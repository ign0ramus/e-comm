import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import './Header.styles.scss';

const Header = ({ user }) => (
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
			{user ? (
				<Link className='option' onClick={() => auth.signOut()}>
					SIGN OUT
				</Link>
			) : (
				<Link className='option' to='/auth'>
					SIGN IN
				</Link>
			)}
		</nav>
	</header>
);

export default Header;
