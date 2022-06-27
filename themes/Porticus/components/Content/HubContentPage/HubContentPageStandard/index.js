import React from 'react';
import DefaultComponent from './HubContentPageStandard';
import WrapperComponent from './HubContentPageStandardWrapper';
import useCmsProps from '../../../../Hooks/useCmsProps.js';

const DefinedComponent = (props) => {
	const cmsProps = useCmsProps(props);

	cmsProps.itemClasses = props.isAutoList ? `${props.itemClasses} standard`: props.itemClasses;

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
