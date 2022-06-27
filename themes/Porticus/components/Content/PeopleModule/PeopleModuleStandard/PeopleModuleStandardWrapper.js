import React from 'react';

const PeopleModuleStandardWrapper = ({
	alias,
	componentBackgroundStyle,
	children
}) => (
	<div style={componentBackgroundStyle}>
		{alias && <a name={alias}></a>}
		{children}
	</div>
);

export default PeopleModuleStandardWrapper;