import React from 'react';

const JobItemStandardWrapper = ({
	alias,
	children
}) => (
	<React.Fragment>
		{alias && <a name={alias}></a>}
		{children}
	</React.Fragment>
);

export default JobItemStandardWrapper;