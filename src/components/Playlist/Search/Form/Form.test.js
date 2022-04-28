import React from 'react';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';
import '@testing-library/jest-dom';

afterEach(cleanup);
describe('<SearchForm>', () => {
	test('should render and be interactive', () => {
		let tempVar = '';

		const fn = jest.fn((name) => {
			tempVar = name;
		});

		const { container } = render(<Form onSubmit={fn} />);

		expect(container).toBeTruthy();
		expect(container).toBeVisible();

		const input = screen.getByLabelText('Search video');
		const button = screen.getByRole('button');

		input.value = 'test';

		expect(input.value).toEqual('test');

		fireEvent.click(button, {
			bubbles: true,
		});

		expect(fn).toHaveBeenCalledTimes(1);
		expect(tempVar).toEqual('test');
	});
});
