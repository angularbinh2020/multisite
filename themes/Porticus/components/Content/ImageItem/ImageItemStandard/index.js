import React from 'react';
import DefaultComponent from './ImageItemStandard';
import WrapperComponent from './ImageItemStandardWrapper';
import UseAnimation from '../../../../../../Legacy/Helpers/JS/UseAnimation'
import useBackgroundColour from '../../../../Hooks/useBackgroundColour.js';
import useCmsProps from '../../../../Hooks/useCmsProps.js';

const DefinedComponent = (props) => {
	const bgColourProps = useBackgroundColour(props);
	const cmsProps = useCmsProps(props);

	const passedProps = {
		itemClasses:props.itemClasses,
		aspectRatio:props.aspectRatio,
		caption:props.caption,
		image:props.image,
		...cmsProps
	};

	const animationSettings = {
		animationClass: 'fade-up',
		buffer: 0.8
	}

	if (props.isRoot) {
		const wrapperClasses = 'component-wrapper';

		return (
			<WrapperComponent wrapperClasses={wrapperClasses} alias={props.alias} {...bgColourProps}>
				<DefaultComponent {...passedProps} />
			</WrapperComponent>
		);
	}

	return (
		<UseAnimation animationSettings={animationSettings}>
			<DefaultComponent {...passedProps} />
		</UseAnimation>
	);

};

export default DefinedComponent;