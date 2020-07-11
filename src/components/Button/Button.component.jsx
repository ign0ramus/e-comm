import React from 'react';
import './Button.styles.scss';

const Button = ({ children, isGoogle, ...restProps }) => (
	<button className={`${isGoogle ? 'google' : ''} button`} {...restProps}>
		{children}
	</button>
);

export default Button;
