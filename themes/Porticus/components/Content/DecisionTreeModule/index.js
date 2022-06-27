import React from 'react';
import DecisionTreeModule from './DecisionTreeModuleStandard';

const SelectedLayout = (props) => {
	switch (props.layout) {

	default:
		return <DecisionTreeModule {...props} />;
	}
};

export default SelectedLayout;
