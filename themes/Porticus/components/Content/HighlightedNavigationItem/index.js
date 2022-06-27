import React from 'react';
import HighlightedNavigationItemStandard from './HighlightedNavigationItemStandard';

const SelectedLayout = (props) => {
	switch (props.layout) {

	default:
		return <HighlightedNavigationItemStandard {...props} />;
	}
};

export default SelectedLayout;
