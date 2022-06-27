import React from 'react';

const ExperienceBannerItemStandardWrapper = ({
	alias,
	children
}) => (
	<React.Fragment>
		{alias && <a name={alias}></a>}
		{children}
	</React.Fragment>
);

export default ExperienceBannerItemStandardWrapper;