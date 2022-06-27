import React from 'react';
import AccordionModuleNarrow from './AccordionModuleNarrow';
import AccordionModuleStandard from './AccordionModuleStandard';

const SelectedLayout = (props) => {

	switch (props.layout) {

	case 'Narrow':
		return <AccordionModuleNarrow {...props}/>;

	default:
		return <AccordionModuleStandard {...props}/>;
	}
};

export default SelectedLayout;