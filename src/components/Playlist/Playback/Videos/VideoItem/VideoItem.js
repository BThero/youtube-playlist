import React from 'react';
import useSWR from 'swr';
import { videoFetcher } from 'lib/api';
import Button from 'components/Button';
import { Wrapper, Span } from './VideoItem.styled';

const VideoItem = ({ idx, id, onClick, playedBefore }) => {
	const { data } = useSWR(id, videoFetcher);

	return (
		<Wrapper>
			<Button onClick={onClick} text="&#x21B4;" type="button" />
			<Span playedBefore={playedBefore}>
				{idx + 1}. {data?.title ?? 'fetching...'}
			</Span>
		</Wrapper>
	);
};

export default VideoItem;
