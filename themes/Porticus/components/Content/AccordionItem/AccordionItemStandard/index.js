import React, { useState, useEffect } from 'react';
import DefaultComponent from './AccordionItemStandard';
import WrapperComponent from './AccordionItemStandardWrapper';
import useCmsProps from '../../../../Hooks/useCmsProps.js';

const DefinedComponent = (props) => {
	const cmsProps = useCmsProps(props);
	const [isActive, setIsActive] = useState(false);

	useEffect(()=> {
		if (props.activeItemId === props.index) {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	},[props.activeItemId, props.index]);

	const passedProps = {
		title:props.title,
		subTitle:props.subTitle,
		text:props.text,
		updateActiveItem: props.updateActiveItem,
		index:props.index,
		isActive:isActive,
		accordionComponents:props.accordionComponents,
		itemClasses:props.itemClasses,
		gaEvent:props.gaEvent,
		layout:props.layout,
		documentTypeAlias:props.documentTypeAlias,
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