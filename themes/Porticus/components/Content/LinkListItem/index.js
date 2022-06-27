import React from 'react';
import LinkListItemStandard from './LinkListItemStandard';
import LinkListItemWithArrow from './LinkListItemWithArrow';

const SelectedLayout = (props) => {

	switch (props.layout) {

	case 'WithArrow':
		return <LinkListItemWithArrow {...props}/>;

	default:
		return <LinkListItemStandard {...props}/>;
	}
};

export default SelectedLayout;