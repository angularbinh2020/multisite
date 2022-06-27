import React from 'react';
import DefaultComponent from './IframeItemStandard';
import WrapperComponent from './IframeItemStandardWrapper';
import useBackgroundColour from '../../../../Hooks/useBackgroundColour.js';
import useCmsProps from '../../../../Hooks/useCmsProps.js';

const DefinedComponent = (props) => {
	const bgColourProps = useBackgroundColour(props);
	const cmsProps = useCmsProps(props);

	const passedProps = {
		iframeUrl : props.iframeUrl,
		itemClasses: props.itemClasses,
		text: props.text,
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