import React from 'react';

const StatisticItemStandardWrapper = ({
	alias,
	children
}) => (
	<React.Fragment>
		{alias && <a name={alias}></a>}
		{children}
	</React.Fragment>
);

export default StatisticItemStandardWrapper;