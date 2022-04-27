import React, { useState } from 'react';
import * as S from './Form.styled';

const Form = ({ onSubmit }) => {
	const [text, setText] = useState('');

	return (
		<S.Form
			onSubmit={(e) => {
				e.preventDefault();
				onSubmit(text);
			}}
		>
			<label htmlFor="playlist">Enter new playlist name: </label>
			<S.Input
				id="playlist"
				type="text"
				value={text}
				onChange={(e) => {
					e.preventDefault();
					setText(e.target.value);
				}}
			/>
			<S.Button type="submit">Create</S.Button>
		</S.Form>
	);
};

export default Form;
