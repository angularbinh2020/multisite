import React from 'react';
import { GridContainer } from '../../../../../../Helpers/JS/Foundation';

const PriorityContentPageGridViewWrapper = ({
	alias,
	children
}) => (
	<GridContainer>
		{alias && <a name={alias}></a>}
		{children}
	</GridContainer>
);

export default PriorityContentPageGridViewWrapper;