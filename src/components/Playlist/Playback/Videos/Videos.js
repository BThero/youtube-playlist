import React from 'react';
import VideoItem from './VideoItem/VideoItem';

const Videos = ({ videos, playing, onSwap }) => {
	return (
		<ul>
			{videos.map((item, idx) => {
				if (idx > playing) {
					return (
						<VideoItem
							idx={idx}
							id={item}
							onClick={(e) => {
								e.preventDefault();
								onSwap(idx);
							}}
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
							onClick={(e) => {
								e.preventDefault();
								onSwap(idx);
							}}
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
