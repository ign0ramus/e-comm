import React from 'react';
import styled, { css } from 'styled-components';

const Group = styled.div`
	position: relative;
	margin: 2.8rem 0;

	input[type='password'] {
		letter-spacing: 0.3em;
	}
`;

const shrinkLabelStyles = css`
	top: -0.9rem;
	font-size: 0.75rem;
	color: black;
`;

const Label = styled.label`
	color: grey;
	font-size: 1rem;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 0.3rem;
	top: 0.6rem;
	transition: 300ms ease all;

	${({ valueLength }) => valueLength && shrinkLabelStyles}
`;

const Input = styled.input`
	background: none;
	background-color: white;
	color: grey;
	font-size: 1.1rem;
	padding: 0.6rem 0.6rem 0.6rem 0.3rem;
	display: block;
	width: 100%;
	border: none;
	border-radius: 0;
	border-bottom: 1px solid grey;
	margin: 1.6rem 0;

	&:focus {
		outline: none;
	}

	&:focus ~ ${Label} {
		${shrinkLabelStyles}
	}
`;

const FormInput = ({ onChange, label, ...restProps }) => (
	<Group>
		<Input onChange={onChange} {...restProps} />
		{label ? <Label valueLength={restProps.value.length}>{label}</Label> : null}
	</Group>
);

export default React.memo(FormInput);
