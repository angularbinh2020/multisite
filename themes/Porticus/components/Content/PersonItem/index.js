import React from 'react';
import PersonItemGridView from './PersonItemGridView';
import PersonItemGridViewFeatured from './PersonItemGridViewFeatured';
import PersonItemListView from './PersonItemListView';
import PersonItemListViewFeatured from './PersonItemListViewFeatured';
import PersonItemStandard from './PersonItemStandard';

const SelectedLayout = (props) => {

	switch (props.layout) {

	case 'GridView':
		return <PersonItemGridView {...props} />;

	case 'GridViewFeatured':
		return <PersonItemGridViewFeatured {...props} />;

	case 'ListView':
		return <PersonItemListView {...props} />;

	case 'ListViewFeatured':
		return <PersonItemListViewFeatured {...props} />;

	default:
		return <PersonItemStandard {...props} />;
	}
};

export default SelectedLayout;