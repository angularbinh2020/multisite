import React from 'react';
import DefaultComponent from './LinkListItemStandard';
import WrapperComponent from './LinkListItemStandardWrapper';
import useCmsProps from '../../../../Hooks/useCmsProps.js';

const DefinedComponent = (props) => {
	const cmsProps = useCmsProps(props);

	const passedProps = {
		itemClasses:props.itemClasses,
		cellClasses:props.cellClasses,
		links:props.links,
		subheading:props.subheading,
		title:props.title,
		titleLink:props.titleLink,
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