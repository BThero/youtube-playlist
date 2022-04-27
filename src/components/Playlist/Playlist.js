import React from 'react';
import { useParams } from 'react-router';
import { playlistFetcher, updatePlaylistFetcher } from '../../lib/api';
import useSWR from 'swr';
import * as S from './Playlist.styled';

import Search from './Search';
import Playback from './Playback';

const Playlist = () => {
	const { playlistId } = useParams();
	const { data, error } = useSWR(playlistId, playlistFetcher, {
		refreshInterval: 3000,
	});

	return (
		<S.PlaylistWrapper>
			{error && <p>Some error occurred</p>}
			{data && (
				<>
					<p>
						Playlist ID{' '}
						<S.ID
							onClick={(e) => {
								e.preventDefault();
								navigator.clipboard.writeText(playlistId);
								alert('Copied to clipboard');
							}}
						>
							{playlistId}
						</S.ID>
					</p>

					<S.TwoCol>
						<Playback
							videos={data.videos}
							onDeleteRequest={async (id) => {
								const newVideos = data.videos.filter((item) => item !== id);
								await updatePlaylistFetcher(playlistId, data.name, newVideos);
							}}
						/>
						<Search
							onSelect={async (id) => {
								await updatePlaylistFetcher(playlistId, data.name, [
									...data.videos,
									id,
								]);
							}}
						/>
					</S.TwoCol>
				</>
			)}
		</S.PlaylistWrapper>
	);
};

export default Playlist;
