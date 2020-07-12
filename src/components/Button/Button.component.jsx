import React from 'react';
import './Button.styles.scss';

const Button = ({ children, isGoogle, inverted, ...restProps }) => (
	<button
		className={`${inverted ? 'inverted' : ''} ${
			isGoogle ? 'google' : ''
		} button`}
		{...restProps}
	>
		{children}
	</button>
);

export default Button;
