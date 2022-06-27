import React from 'react';
import DefaultComponent from './LinkListItemWithArrow';
import WrapperComponent from './LinkListItemWithArrowWrapper';
import useCmsProps from '../../../../Hooks/useCmsProps.js';

const DefinedComponent = (props) => {
	const cmsProps = useCmsProps(props);

	const passedProps = {
		animationSettings: {
			animationClass: 'fade-up',
			buffer: 0.8
		},
		itemClasses:props.itemClasses,
		cellClasses:props.cellClasses,
		links:props.links,
		title:props.title,
		...cmsProps
	};

	if(props.isRoot) {
		return (
			<WrapperComponent alias={props.alias}>
				<DefaultComponent {...passedProps} />
			</WrapperComponent>
		);
	}

	return <DefaultComponent {...passedProps} />;

};

export default DefinedComponent;