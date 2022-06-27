import React from 'react';

const AnchorLinkItemStandardWrapper = ({
	alias,
	children
}) => (
	<React.Fragment>
		{alias && <a name={alias}></a>}
		{children}
	</React.Fragment>
);

export default AnchorLinkItemStandardWrapper;