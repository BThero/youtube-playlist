import React, { useState } from 'react';
import { Input, Button } from './Form.styled';

const Form = ({ onSubmit }) => {
	const [text, setText] = useState('');

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				onSubmit(text);
			}}
		>
			<label htmlFor="playlist">Enter new playlist name: </label>
			<Input
				id="playlist"
				type="text"
				value={text}
				onChange={(e) => {
					e.preventDefault();
					setText(e.target.value);
				}}
			/>
			<Button type="submit">Create</Button>
		</form>
	);
};

export default Form;
