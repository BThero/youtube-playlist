import React, { createRef } from 'react';
import * as S from './Form.styled';
import Input from 'components/Input';
import Button from 'components/Button';

const Form = ({ onSubmit }) => {
	const inputRef = createRef();

	return (
		<S.Form
			onSubmit={(e) => {
				e.preventDefault();
				onSubmit(inputRef.current.value);
			}}
		>
			<Input ref={inputRef} type="text" label="Search video" />
			<Button type="submit" text="Search" />
		</S.Form>
	);
};

export default Form;
