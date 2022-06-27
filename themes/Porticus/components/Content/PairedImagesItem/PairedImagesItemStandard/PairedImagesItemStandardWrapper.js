import React from 'react';

const PairedImagesItemStandardWrapper = ({
	alias,
	children
}) => (
	<React.Fragment>
		{alias && <a name={alias}></a>}
		{children}
	</React.Fragment>
);

export default PairedImagesItemStandardWrapper;