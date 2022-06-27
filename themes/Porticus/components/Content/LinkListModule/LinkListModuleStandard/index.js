import React from 'react';
import DefaultComponent from './LinkListModuleStandard';
import WrapperComponent from './LinkListModuleStandardWrapper';
import useBackgroundColour from '../../../../Hooks/useBackgroundColour.js';
import useCmsProps from '../../../../Hooks/useCmsProps.js';

const DefinedComponent = (props) => {
	const bgColourProps = useBackgroundColour(props);
	const cmsProps = useCmsProps(props);

	const passedProps = {
		animationSettings: {
			animationClass: 'fade-up',
			buffer: 0.8
		},
		itemClasses:props.itemClasses,
		childCellClasses:props.childCellClasses,
		links:props.links,
		title:props.title,
		url:props.url,
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