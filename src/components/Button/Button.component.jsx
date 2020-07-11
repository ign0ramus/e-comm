import React from 'react';
import './Button.styles.scss';

const Button = ({ children, ...restProps }) => (
	<button className='button' {...restProps}>
		{children}
	</button>
);

export default Button;
