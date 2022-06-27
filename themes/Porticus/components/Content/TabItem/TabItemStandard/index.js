import React from 'react';
import DefaultComponent from './TabItemStandard';
import WrapperComponent from './TabItemStandardWrapper';
import useCmsProps from '../../../../Hooks/useCmsProps.js';

const DefinedComponent = (props) => {
	const cmsProps = useCmsProps(props);

	const passedProps = {
		itemClasses: props.itemClasses,
		title: props.title,
		subtitle: props.subtitle,
		link: props.link,
		text: props.text,
		image: props.image,
		imageCaption: props.imageCaption,
		statisticItems: props.statisticItems,
		isOpen: props.isOpen,
		gaEvent: props.gaEvent,
		layout: props.layout,
		documentTypeAlias: props.documentTypeAlias,
		bgImage: props.bgImage,
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