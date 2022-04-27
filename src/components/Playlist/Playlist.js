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
					<h2>{data.name}</h2>

					<p>
						Playlist ID{' '}
						<S.ID
							onClick={(e) => {
								e.preventDefault();
								navigator.clipboard.writeText(playlistId);
							}}
						>
							{playlistId}
						</S.ID>
					</p>

					<S.TwoCol>
						<Playback
							videos={data.videos}
							index={0}
							onDeleteRequest={async (id) => {
								console.log(`Delete request ${id}`);

								const newVideos = data.videos.filter((item) => item !== id);

								const res = await updatePlaylistFetcher(
									playlistId,
									data.name,
									newVideos
								);

								console.log(JSON.stringify(res, null, 2));
							}}
						/>
						<Search
							onSelect={async (id) => {
								const res = await updatePlaylistFetcher(playlistId, data.name, [
									...data.videos,
									id,
								]);

								console.log(JSON.stringify(res, null, 2));
							}}
						/>
					</S.TwoCol>
				</>
			)}
		</S.PlaylistWrapper>
	);
};

export default Playlist;
