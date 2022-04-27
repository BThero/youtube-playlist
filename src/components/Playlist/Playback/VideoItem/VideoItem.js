import React from 'react';
import useSWR from 'swr';
import { videoFetcher } from 'lib/api';
import Button from 'components/Button';

const VideoItem = ({ idx, id, onClick }) => {
	const { data } = useSWR(id, videoFetcher);

	return (
		<div>
			<span>
				{idx}. {data?.title ?? 'fetching...'}
			</span>
			<Button onClick={onClick} text="Swap with next" type="button" />
		</div>
	);
};

export default VideoItem;
