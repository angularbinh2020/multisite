import React from 'react';
import AnchorLinkItemStandard from './AnchorLinkItemStandard';

const SelectedLayout = (props) => {
	switch (props.layout) {

	default:
		return <AnchorLinkItemStandard {...props} />;
	}
};

export default SelectedLayout;
