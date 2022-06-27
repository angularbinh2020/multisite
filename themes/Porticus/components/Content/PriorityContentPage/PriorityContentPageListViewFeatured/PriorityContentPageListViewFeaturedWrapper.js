import React from 'react';

const PriorityContentPageListViewFeaturedWrapper = ({
	alias,
	children
}) => (
	<React.Fragment>
		{alias && <a name={alias}></a>}
		{children}
	</React.Fragment>
);

export default PriorityContentPageListViewFeaturedWrapper;