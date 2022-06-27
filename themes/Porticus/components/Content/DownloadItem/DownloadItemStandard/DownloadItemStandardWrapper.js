import React from 'react';
import { GridContainer } from '../../../../../../Helpers/JS/Foundation';

const DownloadItemStandardWrapper = ({
	alias,
	children
}) => (
	<GridContainer>
		{alias && <a name={alias}></a>}
		{children}
	</GridContainer>
);

export default DownloadItemStandardWrapper;