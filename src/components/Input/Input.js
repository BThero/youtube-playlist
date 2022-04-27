import React, { forwardRef } from 'react';
import * as S from './Input.styled';

const Input = forwardRef((props, ref) => (
	<>
		<label htmlFor={props.id}>{props.label}</label>
		<S.Input id={props.id} ref={ref} type="text" />
	</>
));

export default Input;
