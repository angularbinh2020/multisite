import React from 'react';
import './SearchOverlay.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSystemContext } from '../../../../../../../Core/Contexts';
import { Redirect } from 'react-router';
import { GridX, Cell } from '../../../../../../../Helpers/JS/Foundation';
import SearchInput from './SearchInput';

const Search = ({
	toggleSearch,
	isSearchOpen
}) => {
	return (
		<GridX>
			<Cell className="small-24 large-22 large-offset-1">
				<div className={'search-overlay ' + (isSearchOpen ? 'open' : '')}>
					<div className="search-area">
						<SearchInput
							toggleSearch={toggleSearch}
						/>
					</div>
				</div>
			</Cell>
		</GridX>
	);
}

export default Search;