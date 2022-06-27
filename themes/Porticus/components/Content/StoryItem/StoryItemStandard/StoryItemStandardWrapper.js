import React from 'react';

const StoryItemStandardWrapper = ({
	alias,
	componentBackgroundStyle,
	children
}) => (
	<div style={componentBackgroundStyle}>
		{alias && <a name={alias}></a>}
		{children}
	</div>
);

export default StoryItemStandardWrapper;