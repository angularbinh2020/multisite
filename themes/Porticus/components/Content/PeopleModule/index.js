import React from 'react';
import PeopleModuleStandard from './PeopleModuleStandard';

const SelectedLayout = (props) => {
	switch (props.layout) {

	default:
		return <PeopleModuleStandard {...props} />;
	}
};

export default SelectedLayout;
