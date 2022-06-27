import React from 'react';

const HubContentPageListViewFeaturedWrapper = ({
	alias,
	children
}) => (
	<React.Fragment>
		{alias && <a name={alias}></a>}
		{children}
	</React.Fragment>
);

export default HubContentPageListViewFeaturedWrapper;