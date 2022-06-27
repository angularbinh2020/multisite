import React from 'react';

const PersonItemListViewFeaturedWrapper = ({
	alias,
	children
}) => (
	<React.Fragment>
		{alias && <a name={alias}></a>}
		{children}
	</React.Fragment>
);

export default PersonItemListViewFeaturedWrapper;