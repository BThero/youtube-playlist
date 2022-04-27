import React from 'react';
import Playback from './Playback';
import GlobalStyles from 'globalstyles/GlobalStyles';

export default {
	component: Playback,
	title: 'Playback',
};

const Template = (args) => (
	<>
		<GlobalStyles />
		<Playback {...args} />
	</>
);

export const Default = Template.bind({});
Default.args = {
	videos: ['3TqaLEjwCJg', 'Q36DN31tdRg', 'hk1INRtexUU'],
	onDeleteRequest: () => {},
};
