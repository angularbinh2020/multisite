import React from 'react';

const PersonItemStandardWrapper = ({
	alias,
	componentBackgroundStyle,
	children
}) => (
	<div style={componentBackgroundStyle}>
		{alias && <a name={alias}></a>}
		{children}
	</div>
);

export default PersonItemStandardWrapper;