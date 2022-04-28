import React from 'react';
import { Div } from './Player.styled';
import YouTube from 'react-youtube';

const opts = {
	width: 640,
	height: 480,
	playerVars: {
		autoplay: 1,
	},
};

const Player = ({ id, onEnd }) => {
	return (
		<Div>
			<YouTube videoId={id} onEnd={onEnd} opts={opts} />
		</Div>
	);
};

export default Player;
