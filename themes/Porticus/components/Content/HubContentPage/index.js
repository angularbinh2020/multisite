import React from 'react';
import HubContentPageGridView from './HubContentPageGridView';
import HubContentPageGridViewFeatured from './HubContentPageGridViewFeatured';
import HubContentPageListView from './HubContentPageListView';
import HubContentPageListViewFeatured from './HubContentPageListViewFeatured';
import HubContentPageStandard from './HubContentPageStandard';

const SelectedLayout = (props) => {

	switch (props.layout) {

		case 'GridView':
			return <HubContentPageGridView {...props}/>;

		case 'GridViewFeatured':
			return <HubContentPageGridViewFeatured {...props}/>;
		
		case 'ListView':
			return <HubContentPageListView {...props}/>;
		
		case 'ListViewFeatured':
			return <HubContentPageListViewFeatured {...props}/>;

		default:
			return <HubContentPageStandard {...props}/>;
	}
};

export default SelectedLayout;