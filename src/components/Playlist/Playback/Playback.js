import React, { useState, useEffect } from 'react';
import Player from './Player';
import * as S from './Playback.styled';
import Button from 'components/Button';
import Videos from './Videos';

const Playback = ({ videos, onDeleteRequest, onSwap }) => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const newIndex = Math.max(0, Math.min(index, videos.length - 1));
		setIndex(newIndex);
	}, [index, videos]);

	return (
		<S.Wrapper>
			<header>
				<h2>Videos</h2>
			</header>
			{videos.length === 0 && <p>No videos to display</p>}
			{videos.length > 0 && (
				<>
					<Player
						id={videos[index]}
						onEnd={() => {
							if (index + 1 < videos.length) {
								setIndex(index + 1);
							}
						}}
					/>

					<S.Nav>
						<Button
							type="button"
							text="Prev"
							disabled={index === 0}
							onClick={(e) => {
								e.preventDefault();
								setIndex(index - 1);
							}}
						/>

						<p>
							Playing video {index + 1} out of {videos.length}
						</p>

						<Button
							type="button"
							text="Next"
							disabled={index === videos.length - 1}
							onClick={(e) => {
								e.preventDefault();
								setIndex(index + 1);
							}}
						/>
					</S.Nav>

					<Button
						type="button"
						text="Delete video"
						alarm
						onClick={(e) => {
							e.preventDefault();
							onDeleteRequest(videos[index]);
						}}
					/>

					<Videos videos={videos} playing={index} onSwap={onSwap} />
				</>
			)}
		</S.Wrapper>
	);
};

export default Playback;
