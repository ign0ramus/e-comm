import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../CartIcon/CartIcon.component';
import CartDropdown from '../CartDropdown/CartDropdown.component';
import { selectUser } from '../../redux/user/userSelectors.js';
import { selectCartHidden } from '../../redux/cart/cartSelectors.js';
import { signOutStart } from '../../redux/user/userActions';

const HeaderContainer = styled.header`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
`;

const StyledLink = styled(Link)`
	height: 100%;
	width: 70px;
	padding: 25px;
`;

const Options = styled.nav`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const Option = styled(Link)`
	padding: 10px 15px;
`;
const Header = ({ user, isCartHidden, signOut }) => (
	<HeaderContainer>
		<StyledLink to='/'>
			<Logo />
		</StyledLink>
		<Options>
			<Option to='/shop'>SHOP</Option>
			<Option to='/contact'>CONTACT</Option>
			{user ? (
				<Option to='/auth' onClick={signOut}>
					SIGN OUT
				</Option>
			) : (
				<Option to='/auth'>SIGN IN</Option>
			)}
			<CartIcon />
		</Options>
		{isCartHidden ? null : <CartDropdown />}
	</HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
	user: selectUser,
	isCartHidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
	signOut: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
