import React from 'react';

const PriorityContentPageListViewWrapper = ({
	alias,
	children
}) => (
	<React.Fragment>
		{alias && <a name={alias}></a>}
		{children}
	</React.Fragment>
);

export default PriorityContentPageListViewWrapper;