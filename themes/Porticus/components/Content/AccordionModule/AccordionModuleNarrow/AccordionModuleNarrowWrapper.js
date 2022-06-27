import React from 'react';

const AccordionModuleNarrowWrapper = ({
	alias,
	wrapperClasses,
	children
}) => (
	<div className={wrapperClasses}>
		{alias && <a name={alias}></a>}
		{children}
	</div>
);

export default AccordionModuleNarrowWrapper;