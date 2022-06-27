import React from 'react';
import CuratedListModuleStandard from './CuratedListModuleStandard';

const SelectedLayout = (props) => {

	switch (props.layout) {

		default:
			return <CuratedListModuleStandard {...props}/>;
	}
};

export default SelectedLayout;