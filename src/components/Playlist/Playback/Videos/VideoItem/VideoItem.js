import React from 'react';
import useSWR from 'swr';
import { videoFetcher } from 'lib/api';
import Button from 'components/Button';
import { Wrapper, Span } from './VideoItem.styled';

const VideoItem = ({ idx, id, onVideoClick, onButtonClick, playedBefore }) => {
	const { data } = useSWR(id, videoFetcher);

	return (
		<Wrapper>
			<Button
				onClick={(e) => {
					e.preventDefault();
					onButtonClick(idx);
				}}
				text="&#x21B4;"
				type="button"
			/>
			<Span
				playedBefore={playedBefore}
				onClick={(e) => {
					e.preventDefault();
					onVideoClick(idx);
				}}
			>
				{idx + 1}. {data?.title ?? 'fetching...'}
			</Span>
		</Wrapper>
	);
};

export default VideoItem;
