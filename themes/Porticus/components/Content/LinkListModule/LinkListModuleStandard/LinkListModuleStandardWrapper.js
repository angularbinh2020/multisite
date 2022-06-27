import React from 'react';

const LinkListModuleStandardWrapper = ({
	alias,
	componentBackgroundStyle,
	wrapperClasses,
	children
}) => (
	<div className={wrapperClasses} style={componentBackgroundStyle}>
		{alias && <a name={alias}></a>}
		{children}
	</div>
);

export default LinkListModuleStandardWrapper;