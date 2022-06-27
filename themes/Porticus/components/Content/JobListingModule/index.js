import React from 'react';
import JobListingModuleStandard from './JobListingModuleStandard';

const SelectedLayout = (props) => {

	switch (props.layout) {

	default:
		return <JobListingModuleStandard {...props}/>;
	}
};

export default SelectedLayout;