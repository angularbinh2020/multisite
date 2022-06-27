import React from 'react';
import TabItemStandard from './TabItemStandard';

const SelectedLayout = (props) => {
	switch (props.layout) {

	default:
		return <TabItemStandard {...props} />;
	}
};

export default SelectedLayout;
