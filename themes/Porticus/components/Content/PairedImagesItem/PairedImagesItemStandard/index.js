import React from 'react';
import DefaultComponent from './PairedImagesItemStandard';
import WrapperComponent from './PairedImagesItemStandardWrapper';
import useCmsProps from '../../../../Hooks/useCmsProps.js';

const DefinedComponent = (props) => {
	const cmsProps = useCmsProps(props);

	const passedProps = {
		itemClasses: props.itemClasses,
		largeImage: props.largeImage,
		smallImage: props.smallImage,
		...cmsProps
	};

	if (props.isRoot) {
		return (
			<WrapperComponent alias={props.alias}>
				<DefaultComponent {...passedProps} />
			</WrapperComponent>
		);
	}

	return <DefaultComponent {...passedProps} />;

};

export default DefinedComponent;