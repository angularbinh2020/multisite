import React from 'react';
import LinkListModuleStandard from './LinkListModuleStandard';

const SelectedLayout = (props) => {
	switch (props.layout) {

	default:
		return <LinkListModuleStandard {...props} />;
	}
};

export default SelectedLayout;
