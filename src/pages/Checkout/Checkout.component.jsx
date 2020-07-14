import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import {
	selectCartItems,
	selectCartTotal,
} from '../../redux/cart/cartSelectors';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem.component';
import StripeButton from '../../components/StripeButton/StripeButton.component';

const CheckoutContainer = styled.div`
	width: 55%;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto 0;

	button {
		margin-left: auto;
		margin-top: 50px;
	}
`;

const Header = styled.header`
	width: 100%;
	padding: 10px 0;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid darkgrey;
`;

const HeaderBlock = styled.div`
	text-transform: capitalize;
	width: 23%;

	&:last-child {
		width: 8%;
	}
`;

const Total = styled.div`
	margin-top: 30px;
	margin-left: auto;
	font-size: 36px;
`;

const TestWarning = styled.div`
	text-align: center;
	margin-top: 40px;
	font-size: 24px;
	color: red;
`;

const Checkout = ({ items, total }) => (
	<CheckoutContainer>
		<Header>
			<HeaderBlock>
				<span>Product</span>
			</HeaderBlock>
			<HeaderBlock>
				<span>Description</span>
			</HeaderBlock>
			<HeaderBlock>
				<span>Quantity</span>
			</HeaderBlock>
			<HeaderBlock>
				<span>Price</span>
			</HeaderBlock>
			<HeaderBlock>
				<span>Remove</span>
			</HeaderBlock>
		</Header>
		{items.map((item) => (
			<CheckoutItem key={item.id} item={item} />
		))}
		<Total>
			<span>TOTAL: ${total}</span>
		</Total>
		<TestWarning>
			*Please use the following credit card for test payments*
			<br />
			4242 4242 4242 4242 - Exp: 01/24 - CVV: 123
		</TestWarning>
		<StripeButton price={total} />
	</CheckoutContainer>
);

const mapStateToProps = createStructuredSelector({
	items: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
