import React from 'react';
import TabsModuleStandard from './TabsModuleStandard';

const SelectedLayout = (props) => {
	switch (props.layout) {

	default:
		return <TabsModuleStandard {...props} />;
	}
};

export default SelectedLayout;
