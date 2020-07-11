import React from 'react';

import './FormInput.styles.scss';

const FormInput = ({ onChange, label, ...restProps }) => (
	<div className='group'>
		<input className='form-input' onChange={onChange} {...restProps} />
		{label ? (
			<label
				className={`${restProps.value.length ? 'shrink' : ''} form-input-label`}
			>
				{label}
			</label>
		) : null}
	</div>
);

export default FormInput;
