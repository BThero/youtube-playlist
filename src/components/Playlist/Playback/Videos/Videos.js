import React from 'react';
import VideoItem from './VideoItem/VideoItem';

const Videos = ({ videos, playing, onSwap, onSelect }) => {
	return (
		<ul>
			{videos.map((item, idx) => {
				if (idx > playing) {
					return (
						<VideoItem
							idx={idx}
							id={item}
							onButtonClick={onSwap}
							onVideoClick={onSelect}
						/>
					);
				} else {
					return null;
				}
			})}

			{videos.map((item, idx) => {
				if (idx < playing) {
					return (
						<VideoItem
							idx={idx}
							id={item}
							onButtonClick={onSwap}
							onVideoClick={onSelect}
							playedBefore
						/>
					);
				} else {
					return null;
				}
			})}
		</ul>
	);
};

export default Videos;
