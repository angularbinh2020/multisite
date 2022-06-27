import React from 'react';
import StatisticsModuleStandard from './StatisticsModuleStandard';

const SelectedLayout = (props) => {
	switch (props.layout) {

	default:
		return <StatisticsModuleStandard {...props} />;
	}
};

export default SelectedLayout;
