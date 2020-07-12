import React from 'react';

import Button from '../Button/Button.component';
import './CartDropdown.styles.scss';

const CartDropdown = () => (
	<div className='dropdown'>
		<div className='cart-items'>
			<Button>GO TO CHECKOUT</Button>
		</div>
	</div>
);

export default CartDropdown;
