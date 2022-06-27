import React from 'react';

const HighlightedNavigationItemStandardWrapper = ({
	alias,
	children
}) => (
	<React.Fragment>
		{alias && <a name={alias}></a>}
		{children}
	</React.Fragment>
);

export default HighlightedNavigationItemStandardWrapper;