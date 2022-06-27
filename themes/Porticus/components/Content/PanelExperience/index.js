import React from 'react';
import PanelExperienceStandard from './PanelExperienceStandard';

const SelectedLayout = (props) => {
	switch (props.layout) {

	default:
		return <PanelExperienceStandard {...props} />;
	}
};

export default SelectedLayout;
