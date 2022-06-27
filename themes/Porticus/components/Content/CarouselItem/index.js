import React from 'react';
import CarouselItemStandard from './CarouselItemStandard';
import CarouselItemImages from './CarouselItemImages';

const SelectedLayout = (props) => {
	switch (props.layout) {
		case 'Images':
		return <CarouselItemImages {...props}/>;

		default:
			return <CarouselItemStandard {...props}/>;
	}
};

export default SelectedLayout;