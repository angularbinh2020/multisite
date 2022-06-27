import React from 'react';

const ExperiencePromoItemStandardWrapper = ({
	alias,
	children
}) => (
	<React.Fragment>
		{alias && <a name={alias}></a>}
		{children}
	</React.Fragment>
);

export default ExperiencePromoItemStandardWrapper;