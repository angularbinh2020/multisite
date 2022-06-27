import React from 'react';

const MediaModuleStandardWrapper = ({
	componentBackgroundStyle,
	children
}) => (
	<div style={componentBackgroundStyle}>
		{children}
	</div>
);

export default MediaModuleStandardWrapper;