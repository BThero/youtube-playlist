import React from 'react';
import Header from './components/Header';
import GlobalStyles from './globalstyles';
import * as S from './App.styled';
import Form from './components/Form';
import { Outlet, useNavigate } from 'react-router-dom';
import { createPlaylistFetcher } from './lib/api';

const App = () => {
	const navigate = useNavigate();

	return (
		<>
			<GlobalStyles />
			<S.App>
				<Header />
				<Form
					onSubmit={async (name) => {
						const res = await createPlaylistFetcher(name);
						navigate(`/${res.id}`);
					}}
				/>
				<Outlet />
			</S.App>
		</>
	);
};

export default App;
