import React from 'react';
import {
	cleanup,
	render,
	screen,
	getByText,
	fireEvent,
} from '@testing-library/react';
import List from './List';
import '@testing-library/jest-dom';

afterEach(cleanup);
describe('<Header>', () => {
	test('should render and be interactive', () => {
		const fn = jest.fn();

		const { container } = render(
			<List
				data={[
					{
						id: {
							videoId: 1,
						},
						title: '1',
						duration_raw: 1,
						views: 1,
					},
					{
						id: {
							videoId: 2,
						},
						title: '2',
						duration_raw: 2,
						views: 2,
					},
				]}
				onSelect={fn}
			/>
		);

		expect(container).toBeTruthy();
		expect(container).toBeVisible();

		const listItems = screen.getAllByRole('listitem');

		for (let i = 0; i < listItems.length; i++) {
			const element = listItems[i];

			// eslint-disable-next-line testing-library/prefer-screen-queries
			expect(getByText(element, `${i + 1}`)).toBeTruthy();

			fireEvent(
				element,
				new MouseEvent('click', {
					bubbles: true,
				})
			);

			expect(fn).toHaveBeenCalledTimes(i + 1);
		}
	});
});
