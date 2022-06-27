import React from 'react';

const PriorityContentPageGridViewFeaturedWrapper = ({
	alias,
	children
}) => (
	<React.Fragment>
		{alias && <a name={alias}></a>}
		{children}
	</React.Fragment>
);

export default PriorityContentPageGridViewFeaturedWrapper;