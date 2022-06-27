import React from 'react';
import DefaultComponent from './TableItemStandard';
import WrapperComponent from './TableItemStandardWrapper';
import UseAnimation from '../../../../../../Legacy/Helpers/JS/UseAnimation';
import useBackgroundColour from '../../../../Hooks/useBackgroundColour.js';
import useCmsProps from '../../../../Hooks/useCmsProps.js';

const DefinedComponent = (props) => {
	const bgColourProps = useBackgroundColour(props);
	const cmsProps = useCmsProps(props);

	const passedProps = {
		itemClasses: props.itemClasses,
		text: props.text,
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
				<UseAnimation animationSettings={animationSettings}>
					<DefaultComponent {...passedProps} />
				</UseAnimation>
			</WrapperComponent>
		);
	}

	return <DefaultComponent {...passedProps} />;
};

export default DefinedComponent;