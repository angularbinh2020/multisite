import React from 'react';
import JobItemStandard from './JobItemStandard';

const SelectedLayout = (props) => {
	switch (props.layout) {

	default:
		return <JobItemStandard {...props} />;
	}
};

export default SelectedLayout;
