import React from 'react';
import AutoListModuleStandard from './AutoListModuleStandard';


const SelectedLayout = (props) => {

	switch (props.layout) {

		default:
			return <AutoListModuleStandard {...props}/>;
	}
};

export default SelectedLayout;