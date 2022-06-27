import React, { useState } from 'react';
import DefaultComponent from './VideoItemStandard';
import WrapperComponent from './VideoItemStandardWrapper';
import useBackgroundColour from '../../../../Hooks/useBackgroundColour.js';
import useCmsProps from '../../../../Hooks/useCmsProps.js';

const DefinedComponent = (props) => {
	const bgColourProps = useBackgroundColour(props);
	const cmsProps = useCmsProps(props);
	
	const passedProps = {
		itemClasses: props.itemClasses,
		title: props.title,
		videoUrl: props.videoUrl,
		...cmsProps
	};

	if (props.isRoot) {
		const wrapperClasses = 'component-wrapper';

		return (
			<WrapperComponent wrapperClasses={wrapperClasses} alias={props.alias} {...bgColourProps}>
				<DefaultComponent {...passedProps} />
			</WrapperComponent>
		);
	}

	return <DefaultComponent {...passedProps} />;

};

export default DefinedComponent;