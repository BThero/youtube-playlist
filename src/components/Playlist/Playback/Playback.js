import React, { useState, useEffect } from 'react';
import Player from './Player';
import * as S from './Playback.styled';

const Playback = ({ videos, onDeleteRequest }) => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const newIndex = Math.min(index, videos.length - 1);
		setIndex(newIndex);
	}, [index, videos]);

	return (
		<S.Wrapper>
			<header>
				<h3>Videos</h3>
			</header>
			{videos.length === 0 && <p>No videos to display</p>}
			{videos.length > 0 && (
				<>
					<Player id={videos[index]} />

					<S.Nav>
						<S.Button
							disabled={index === 0}
							onClick={(e) => {
								e.preventDefault();
								setIndex(index - 1);
							}}
						>
							Prev
						</S.Button>

						<p>
							Playing video {index + 1} out of {videos.length}
						</p>

						<S.Button
							disabled={index === videos.length - 1}
							onClick={(e) => {
								e.preventDefault();
								setIndex(index + 1);
							}}
						>
							Next
						</S.Button>
					</S.Nav>

					<S.Button
						onClick={(e) => {
							e.preventDefault();
							onDeleteRequest(videos[index]);
						}}
					>
						Delete this video
					</S.Button>
				</>
			)}
		</S.Wrapper>
	);
};

export default Playback;
