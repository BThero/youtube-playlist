import React, { useState } from 'react';
import Header from './components/Header';

import NewPlaylistForm from './components/NewPlaylistForm';
import ImportPlaylistForm from 'components/ImportPlaylistForm/ImportPlaylistForm';

import { Outlet, useNavigate } from 'react-router-dom';
import { createPlaylistFetcher } from './lib/api';

import GlobalStyles from './globalstyles';
import * as S from './App.styled';

const App = () => {
	const navigate = useNavigate();
	const [form, setForm] = useState('new');

	return (
		<>
			<GlobalStyles />
			<S.App>
				<Header />
				{form === 'new' && (
					<>
						<NewPlaylistForm
							onSubmit={async (name) => {
								const res = await createPlaylistFetcher(name);
								navigate(`/${res.id}`);
							}}
						/>
						<S.ButtonText
							onClick={(e) => {
								e.preventDefault();
								setForm('import');
							}}
						>
							Or import an existing playlist...
						</S.ButtonText>
					</>
				)}
				{form === 'import' && (
					<>
						<ImportPlaylistForm
							onSubmit={(id) => {
								navigate(`/${id.trim()}`);
							}}
						/>
						<S.ButtonText
							onClick={(e) => {
								e.preventDefault();
								setForm('new');
							}}
						>
							Or create a new playlist...
						</S.ButtonText>
					</>
				)}

				<S.HR />
				<Outlet />
			</S.App>
		</>
	);
};

export default App;
