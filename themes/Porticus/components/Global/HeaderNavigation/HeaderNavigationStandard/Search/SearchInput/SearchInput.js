import React, { useEffect, useRef } from 'react';
import './SearchInput.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchInput = ({
	getResults,
	updateInputValue,
	checkKey,
	placeholder,
	inputValue
}) => {
  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

	return (
		<div className="search-input">
			<input
        ref={searchRef}
        name="search"
        placeholder={placeholder && placeholder}
        type="text"
        onKeyPress={evt => checkKey(evt)}
        onChange={evt => updateInputValue(evt)}
        value={inputValue}
      />
			<button className="search-go" onClick={getResults}><i><FontAwesomeIcon icon={['far', 'search']} /></i></button>
		</div>
	);
}

export default SearchInput;