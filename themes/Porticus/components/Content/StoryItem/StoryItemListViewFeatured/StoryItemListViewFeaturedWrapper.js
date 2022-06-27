import React from 'react';
import { GridContainer } from '../../../../../../Helpers/JS/Foundation';

const StoryItemListViewFeaturedWrapper = ({
	alias,
	children
}) => (
	<GridContainer>
		{alias && <a name={alias}></a>}
		{children}
	</GridContainer>
);

export default StoryItemListViewFeaturedWrapper;