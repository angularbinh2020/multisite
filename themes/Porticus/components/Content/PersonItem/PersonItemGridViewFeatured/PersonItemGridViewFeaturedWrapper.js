import React from 'react';

const PersonItemGridViewFeaturedWrapper = ({
	alias,
	children
}) => (
	<React.Fragment>
		{alias && <a name={alias}></a>}
		{children}
	</React.Fragment>
);

export default PersonItemGridViewFeaturedWrapper;