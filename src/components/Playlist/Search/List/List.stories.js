import React from 'react';
import List from './List';
import GlobalStyles from 'globalstyles';

export default {
	component: List,
	title: 'List',
};

const Template = (args) => (
	<>
		<GlobalStyles />
		<List {...args} />
	</>
);

export const Default = Template.bind({});
Default.args = {
	data: [
		{
			id: {
				videoId: '1',
			},
			title: 'video 1',
			duration_raw: '1',
			views: '1',
		},
		{
			id: {
				videoId: '2',
			},
			title: 'video 2',
			duration_raw: '2',
			views: '2',
		},
		{
			id: {
				videoId: '3',
			},
			title: 'video 3',
			duration_raw: '3',
			views: '3',
		},
	],
	onSelect: () => {},
};
