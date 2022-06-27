import React from 'react';

const PanelExperienceStandardWrapper = ({
	alias,
	children
}) => (
	<React.Fragment>
		{alias && <a name={alias}></a>}
		{children}
	</React.Fragment>
);

export default PanelExperienceStandardWrapper;