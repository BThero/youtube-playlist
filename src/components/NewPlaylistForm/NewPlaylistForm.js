import React, { createRef } from 'react';
import Input from 'components/Input';
import Button from 'components/Button';
import * as S from './NewPlaylistForm.styled';

const NewPlaylistForm = ({ onSubmit }) => {
	const inputRef = createRef();

	return (
		<S.NewPlaylistForm
			onSubmit={(e) => {
				e.preventDefault();
				onSubmit(inputRef.current.value);
			}}
		>
			<Input label="Enter new playlist name: " id="playlist" ref={inputRef} />
			<Button type="submit" text="Create" />
		</S.NewPlaylistForm>
	);
};

export default NewPlaylistForm;
