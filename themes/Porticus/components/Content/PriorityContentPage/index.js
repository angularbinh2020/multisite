import React from 'react';
import PriorityContentPageStandard from './PriorityContentPageStandard';
import PriorityContentPageGridView from './PriorityContentPageGridView';

const SelectedLayout = (props) => {

	switch (props.layout) {

		case 'GridView':
			return <PriorityContentPageGridView {...props}/>;

		case 'GridViewFeatured':
			return <PriorityContentPageStandard {...props}/>;
		
		case 'ListView':
			return <PriorityContentPageStandard {...props}/>;
		
		case 'ListViewFeatured':
			return <PriorityContentPageStandard {...props}/>;

		default:
			return <PriorityContentPageStandard {...props}/>;
	}
};

export default SelectedLayout;