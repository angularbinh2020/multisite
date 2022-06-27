import React from 'react';
import AccordionItemStandard from './AccordionItemStandard';

const SelectedLayout = (props) => {
	switch (props.layout) {

	default:
		return <AccordionItemStandard {...props} />;
	}
};

export default SelectedLayout;
