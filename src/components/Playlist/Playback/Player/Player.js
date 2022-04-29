import React from 'react';
import { Div } from './Player.styled';
import YouTube from 'react-youtube';
import useSWR from 'swr';
import { videoFetcher } from 'lib/api';

const opts = {
	width: 640,
	height: 480,
	playerVars: {
		autoplay: 1,
	},
};

const Player = ({ id, onEnd }) => {
	const { data } = useSWR(id, videoFetcher);

	return (
		<Div>
			<YouTube videoId={id} onEnd={onEnd} opts={opts} />
			{data && (
				<>
					<h2>{data.title}</h2>
					<p>{data.description}</p>
				</>
			)}
		</Div>
	);
};

export default Player;
