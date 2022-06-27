import React from 'react';
import StoryItemGridView from './StoryItemGridView';
import StoryItemGridViewFeatured from './StoryItemGridViewFeatured';
import StoryItemListView from './StoryItemListView';
import StoryItemListViewFeatured from './StoryItemListViewFeatured';
import StoryItemStandard from './StoryItemStandard';

const SelectedLayout = (props) => {

	switch (props.layout) {

	case 'GridView':
		return <StoryItemGridView {...props} />;

	case 'GridViewFeatured':
		return <StoryItemGridViewFeatured {...props} />;

	case 'ListView':
		return <StoryItemListView {...props} />;

	case 'ListViewFeatured':
		return <StoryItemListViewFeatured {...props} />;

	default:
		return <StoryItemStandard {...props} />;
	}
};

export default SelectedLayout;