import React, { useState } from 'react';
import useSWR from 'swr';
import { searchFetcher } from '../../../lib/api';
import SearchForm from './Form';
import List from './List';

const Search = ({ onSelect }) => {
	const [searchText, setSearchText] = useState('');
	const { data } = useSWR(searchText.length ? searchText : null, searchFetcher);

	return (
		<div>
			<SearchForm
				onSubmit={(text) => {
					setSearchText(text);
				}}
			/>

			{data && <List data={data} onSelect={onSelect} />}
		</div>
	);
};

export default Search;
