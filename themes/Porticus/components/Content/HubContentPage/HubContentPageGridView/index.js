import React from 'react';
import DefaultComponent from './HubContentPageGridView';
import WrapperComponent from './HubContentPageGridViewWrapper';
import useCmsProps from '../../../../Hooks/useCmsProps.js';

const DefinedComponent = (props) => {
	const cmsProps = useCmsProps(props);

	cmsProps.itemClasses = props.isAutoList ? `${props.itemClasses} grid-view`: props.itemClasses;

	const passedProps = {
		header: props.header,
		url: props.url,
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