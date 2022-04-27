import React from 'react';
import Button from './Button';
import GlobalStyles from 'globalstyles/GlobalStyles';

export default {
	component: Button,
	title: 'Button',
};

const Template = (args) => (
	<>
		<GlobalStyles />
		<Button {...args} />
	</>
);

export const Default = Template.bind({});

Default.args = {
	type: 'button',
	text: 'Default Button',
	onClick: () => {},
};

export const Alarm = Template.bind({});

Alarm.args = {
	type: 'button',
	text: 'Alarm Button',
	alarm: true,
	onClick: () => {},
};
