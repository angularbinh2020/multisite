import React from 'react';
import './FilterResults.scss';
import FilterResultsItem from './FilterResultsItem';

const FilterResults = ({
	results,
	errorMessage
}) => (
	<React.Fragment>
		{results.length > 0 ?
			results.map((result, i) => (
				<FilterResultsItem
					resultItemProps={result}
					key={i}
				/>
			))
			:
			errorMessage
		}
	</React.Fragment>
);

export default FilterResults;