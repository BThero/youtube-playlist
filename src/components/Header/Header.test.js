import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import '@testing-library/jest-dom';
import { playlistFetcher } from '../../lib/api';

jest.mock('../../lib/api');

afterEach(cleanup);
describe('<Header>', () => {
	test('should render with default path', () => {
		const { container } = render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>
		);

		expect(container).toBeTruthy();
		expect(container).toBeVisible();

		const h1 = screen.getByRole('heading');
		expect(h1.textContent).toEqual('Youtube playlists');
	});

	test('should render with playlist id', async () => {
		playlistFetcher.mockResolvedValue({ name: 'test' });

		const { container } = await render(
			<MemoryRouter initialEntries={['/vJcYNl-_k7C8AwjQ8ITWL']}>
				<Routes>
					<Route path="/:playlistId" element={<Header />} />
				</Routes>
			</MemoryRouter>
		);

		expect(container).toBeTruthy();
		expect(container).toBeVisible();

		await screen.findByText('test');

		const h1 = screen.getByRole('heading');
		expect(h1.textContent).toEqual('test');
	});
});
