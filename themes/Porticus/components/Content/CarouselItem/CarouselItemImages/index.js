import React from 'react';
import DefaultComponent from './CarouselItemImages';
import WrapperComponent from './CarouselItemImagesWrapper';

const DefinedComponent = (props) => {

	const passedProps = {
		itemClasses: props.itemClasses,
		image: props.image,
		imageCaption: props.imageCaption,
		link: props.link,
		layout: props.layout,
		text: props.text,
		title: props.title
	};

	if(props.isRoot) {
		return (
			<WrapperComponent alias={props.alias}>
				<DefaultComponent {...passedProps} />
			</WrapperComponent>
		);
	}

	return <DefaultComponent {...passedProps} />

}

export default DefinedComponent