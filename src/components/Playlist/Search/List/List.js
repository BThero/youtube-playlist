import React from 'react';
import { UL, LI, Wrapper } from './List.styled';

const List = ({ data, onSelect }) => {
	return (
		<UL>
			{data.map((item) => (
				<LI
					key={item.id.videoId}
					onClick={(e) => {
						e.preventDefault();
						onSelect(item.id.videoId);
					}}
				>
					<header>
						<h3>{item.title}</h3>
					</header>
					<Wrapper>
						<span>Duration: {item.duration_raw}</span>
						<span>Views: {item.views}</span>
					</Wrapper>
				</LI>
			))}
		</UL>
	);
};

export default List;
