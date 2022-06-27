import React from 'react';
import IPanelCompositionStandard from './IPanelCompositionStandard';

const SelectedLayout = (props) => {
	switch (props.layout) {

	default:
		return <IPanelCompositionStandard {...props} />;
	}
};

export default SelectedLayout;
