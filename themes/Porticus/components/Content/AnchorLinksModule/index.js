import React from 'react';
import AnchorLinksModuleStandard from './AnchorLinksModuleStandard';

const SelectedLayout = (props) => {
	switch (props.layout) {

	default:
		return <AnchorLinksModuleStandard {...props} />;
	}
};

export default SelectedLayout;
