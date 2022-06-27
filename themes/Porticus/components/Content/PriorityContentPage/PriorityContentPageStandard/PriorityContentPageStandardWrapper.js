import React from 'react';

const PriorityContentPageStandardWrapper = ({
	alias,
	componentBackgroundStyle,
	children
}) => (
	<div style={componentBackgroundStyle}>
		{alias && <a name={alias}></a>}
		{children}
	</div>
);

export default PriorityContentPageStandardWrapper;