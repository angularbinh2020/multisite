import React from 'react';

const StoryItemGridViewFeaturedWrapper = ({
	alias,
	children
}) => (
	<React.Fragment>
		{alias && <a name={alias}></a>}
		{children}
	</React.Fragment>
);

export default StoryItemGridViewFeaturedWrapper;