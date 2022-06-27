import React from 'react';
import CarouselModuleStandard from './CarouselModuleStandard';
import CarouselModuleImages from './CarouselModuleImages';

const SelectedLayout = (props) => {
	switch (props.layout) {
		case 'Images':
		return <CarouselModuleImages {...props}/>;

		default:
			return <CarouselModuleStandard {...props}/>;
	}
};

export default SelectedLayout;