import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Button from './Button';
import '@testing-library/jest-dom';

afterEach(cleanup);
describe('<Button>', () => {
	test('should render', () => {
		const view = render(
			<Button text="button" type="button" onClick={() => {}} />
		);

		expect(view.container).toBeTruthy();
		expect(view.container).toBeVisible();
		expect(view.container.textContent).toEqual('button');
	});
});
