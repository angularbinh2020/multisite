import React from 'react';
import ContactItemStandard from './ContactItemStandard';

const SelectedLayout = (props) => {
	switch (props.layout) {

	default:
		return <ContactItemStandard {...props} />;
	}
};

export default SelectedLayout;
