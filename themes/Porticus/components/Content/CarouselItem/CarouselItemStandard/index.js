import React from 'react';
import DefaultComponent from './CarouselItemStandard';
import WrapperComponent from './CarouselItemStandardWrapper';
import useCmsProps from '../../../../Hooks/useCmsProps.js';

const DefinedComponent = (props) => {
	const cmsProps = useCmsProps(props);

	const passedProps = {
		itemClasses: props.itemClasses,
		image: props.image,
		imageCaption: props.imageCaption,
		link: props.link,
		layout: props.layout,
		text: props.text,
		title: props.title,
		...cmsProps
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