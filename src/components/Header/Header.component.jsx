import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../CartIcon/CartIcon.component';
import CartDropdown from '../CartDropdown/CartDropdown.component';
import './Header.styles.scss';

const Header = ({ user, isCartHidden }) => (
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
				<Link className='option' to='/auth' onClick={() => auth.signOut()}>
					SIGN OUT
				</Link>
			) : (
				<Link className='option' to='/auth'>
					SIGN IN
				</Link>
			)}
			<CartIcon />
		</nav>
		{isCartHidden ? null : <CartDropdown />}
	</header>
);

const mapStateToProps = ({ user: { user }, cart }) => ({
	user,
	isCartHidden: cart.hidden,
});

export default connect(mapStateToProps)(Header);
