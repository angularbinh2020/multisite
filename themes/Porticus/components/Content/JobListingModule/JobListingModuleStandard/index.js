import React, { useState } from 'react';
import DefaultComponent from './JobListingModuleStandard';
import WrapperComponent from './JobListingModuleStandardWrapper';
import useBackgroundColour from '../../../../Hooks/useBackgroundColour.js';
import useCmsProps from '../../../../Hooks/useCmsProps.js';

const DefinedComponent = (props) => {
	const bgColourProps = useBackgroundColour(props);
	const cmsProps = useCmsProps(props);
	const [activeItemId, setActiveItemId] = useState(-1);

	const updateActiveItem = (e) => {
		e.preventDefault();

		const newActiveId = Number(e.currentTarget.dataset.id);

		if (activeItemId === newActiveId) {
			setActiveItemId(-1);
		}
		else {
			setActiveItemId(newActiveId);
		}

	};

	const passedProps = {
		animationSettings: {
			animationClass: 'fade-up',
			buffer: 0.8
		},
		itemClasses: props.itemClasses,
		title: props.title,
		items: props.items,
		updateActiveItem: updateActiveItem,
		activeItemId: activeItemId,
		linkName : props.linkName,
		jobContentLink: props.jobContentLink,
		styles:{
			backgroundColor: props.backgroundColour
		},
		...cmsProps
	};

	if(!props.items) return (null);

	if (props.isRoot) {
		const wrapperClasses = 'component-wrapper';

		return (
			<WrapperComponent wrapperClasses={wrapperClasses} alias={props.alias} {...bgColourProps}>
				<DefaultComponent {...passedProps} />
			</WrapperComponent>
		);
	}

	return <DefaultComponent {...passedProps} />;
}

export default DefinedComponent
