import React from 'react';
import './LogoStandard.scss';

const LogoStandard = ({
	logo
}) => {
	return (
		<React.Fragment>
			{logo.url && <img src={logo.url} alt={logo.name} />}
		</React.Fragment>
	);
};

export default LogoStandard;
