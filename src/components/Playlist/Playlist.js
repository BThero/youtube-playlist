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

	if (!data && !error) {
		return <p>loading...</p>;
	}

	if (data && data.videos) {
		return (
			<S.PlaylistWrapper>
				{error && <p>Some error occurred</p>}
				{data && data.videos && (
					<>
						<p>
							Playlist ID{' '}
							<S.ID
								onClick={async (e) => {
									e.preventDefault();
									await navigator.clipboard.writeText(playlistId);
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
								onSwap={async (idx) => {
									if (idx >= 0 && idx < data.videos.length) {
										const nxt = (idx + 1) % data.videos.length;
										const newVideos = data.videos.slice();

										[newVideos[idx], newVideos[nxt]] = [
											newVideos[nxt],
											newVideos[idx],
										];

										await updatePlaylistFetcher(
											playlistId,
											data.name,
											newVideos
										);
									}
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
	}

	return <p>{data?.message ?? 'Unknown error'}</p>;
};

export default Playlist;
