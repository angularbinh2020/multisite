import React from 'react';

const LinkListItemWithArrowWrapper = ({
	alias,
	children
}) => (
	<React.Fragment>
		{alias && <a name={alias}></a>}
		{children}
	</React.Fragment>
);

export default LinkListItemWithArrowWrapper;