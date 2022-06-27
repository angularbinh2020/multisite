import React from 'react';

const HubContentPageGridViewFeaturedWrapper = ({
	alias,
	children
}) => (
	<React.Fragment>
		{alias && <a name={alias}></a>}
		{children}
	</React.Fragment>
);

export default HubContentPageGridViewFeaturedWrapper;