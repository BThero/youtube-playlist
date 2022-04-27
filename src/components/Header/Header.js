import React from 'react';
import * as S from './Header.styled';
import { useParams } from 'react-router';
import useSWR from 'swr';
import { playlistFetcher } from '../../lib/api';

const Header = () => {
	const { playlistId } = useParams();
	const { data } = useSWR(playlistId, playlistFetcher);

	return (
		<S.Header>
			<h1>{data ? data.name : 'Youtube playlists'}</h1>
			<hr />
		</S.Header>
	);
};

export default Header;
