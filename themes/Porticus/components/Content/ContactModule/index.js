import React from 'react';
import ContactModuleStandard from './ContactModuleStandard';

const SelectedLayout = (props) => {
	switch (props.layout) {

	default:
		return <ContactModuleStandard {...props} />;
	}
};

export default SelectedLayout;
