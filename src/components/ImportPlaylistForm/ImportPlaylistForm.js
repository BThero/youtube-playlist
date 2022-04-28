import React, { createRef } from 'react';
import Input from 'components/Input';
import Button from 'components/Button';
import * as S from './ImportPlaylistForm.styled';

const ImportPlaylistForm = ({ onSubmit }) => {
	const inputRef = createRef();

	return (
		<S.ImportPlaylistForm
			onSubmit={(e) => {
				e.preventDefault();
				onSubmit(inputRef.current.value);
			}}
		>
			<Input
				label="Enter importing playlist id: "
				id="playlist"
				ref={inputRef}
			/>
			<Button type="submit" text="Import" />
		</S.ImportPlaylistForm>
	);
};

export default ImportPlaylistForm;
