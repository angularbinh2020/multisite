import React from 'react';

const DecisionTreeItemStandardWrapper = ({
	alias,
	wrapperClasses,
	children
}) => (
	<div className={wrapperClasses}>
		{alias && <a name={alias}></a>}
		{children}
	</div>
);

export default DecisionTreeItemStandardWrapper;