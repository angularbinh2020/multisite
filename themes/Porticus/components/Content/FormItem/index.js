import React from 'react';
import FormItemStandard from './FormItemStandard';

const SelectedLayout = (props) => {
	switch (props.layout) {

	default:
		return <FormItemStandard {...props} />;
	}
};

export default SelectedLayout;
