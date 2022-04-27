import React, { useState, useEffect } from 'react';
import Player from './Player';
import * as S from './Playback.styled';
import Button from 'components/Button';
import VideoItem from './VideoItem';

const Playback = ({ videos, onDeleteRequest, onSwapAdjacent }) => {
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

					{videos.map((item, idx) => {
						if (idx > index) {
							return (
								<VideoItem
									idx={idx}
									id={item}
									onClick={(e) => {
										e.preventDefault();
										onSwapAdjacent(idx);
									}}
								/>
							);
						} else {
							return null;
						}
					})}

					{videos.map((item, idx) => {
						if (idx < index) {
							return (
								<VideoItem
									idx={idx}
									id={item}
									onClick={(e) => {
										e.preventDefault();
										onSwapAdjacent(idx);
									}}
								/>
							);
						} else {
							return null;
						}
					})}
				</>
			)}
		</S.Wrapper>
	);
};

export default Playback;
