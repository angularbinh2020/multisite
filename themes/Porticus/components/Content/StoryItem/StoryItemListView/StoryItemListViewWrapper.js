import React from 'react';

const StoryItemListViewWrapper = ({
	alias,
	children
}) => (
	<React.Fragment>
		{alias && <a name={alias}></a>}
		{children}
	</React.Fragment>
);

export default StoryItemListViewWrapper;