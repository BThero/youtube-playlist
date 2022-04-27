import React, { createRef } from 'react';
import Input from 'components/Input';
import Button from 'components/Button';
import * as S from './Form.styled';

const Form = ({ onSubmit }) => {
	const inputRef = createRef();

	return (
		<S.Form
			onSubmit={(e) => {
				e.preventDefault();
				onSubmit(inputRef.current.value);
			}}
		>
			<Input label="Enter new playlist name: " id="playlist" ref={inputRef} />
			<Button type="submit" text="Create" />
		</S.Form>
	);
};

export default Form;
