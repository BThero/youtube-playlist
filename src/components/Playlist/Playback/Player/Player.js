import React from 'react';
import { Div, Video } from './Player.styled';

const Player = ({ id }) => {
	return (
		<Div>
			<Video
				width="480px"
				height="360px"
				title="Youtube player"
				sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
				src={`https://youtube.com/embed/${id}?autoplay=1`}
				allowFullScreen
			/>
		</Div>
	);
};

export default Player;
