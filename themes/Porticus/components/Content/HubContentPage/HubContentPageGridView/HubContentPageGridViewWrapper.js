import React from 'react';
import { GridContainer } from '../../../../../../Helpers/JS/Foundation';

const HubContentPageGridViewWrapper = ({
	alias,
	children
}) => (
	<GridContainer>
		{alias && <a name={alias}></a>}
		{children}
	</GridContainer>
);

export default HubContentPageGridViewWrapper;