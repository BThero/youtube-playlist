import React from 'react';
import Player from './Player';

export default {
	component: Player,
	title: 'Player',
};

const Template = (args) => <Player {...args} />;

export const Default = Template.bind({});
Default.args = {
	id: 'hk1INRtexUU',
};
