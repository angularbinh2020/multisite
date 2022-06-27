import React from 'react';

const AccordionItemStandardWrapper = ({
	alias,
	children
}) => (
	<div>
		{alias && <a name={alias}></a>}
		{children}
	</div>
);

export default AccordionItemStandardWrapper;