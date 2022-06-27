import React, { useState } from 'react';
import DefaultComponent from './AccordionModuleNarrow';
import WrapperComponent from './AccordionModuleNarrowWrapper';
import UseAnimation from '../../../../../../Legacy/Helpers/JS/UseAnimation'
import useCmsProps from '../../../../Hooks/useCmsProps.js'; 

const DefinedComponent = (props) => {
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
		styles:{
			backgroundColor: props.backgroundColour
		},
		...cmsProps
	};

	const animationSettings = {
		animationClass: 'fade-up',
		buffer: 0.8
	}

	if(!props.items) return (null);

	if (props.isRoot) {
		const wrapperClasses = 'component-wrapper';

		return (
			<WrapperComponent wrapperClasses={wrapperClasses} alias={props.alias}>
				<UseAnimation animationSettings={animationSettings}>
					<DefaultComponent {...passedProps} />
				</UseAnimation>
			</WrapperComponent>
		);
	}

	return <DefaultComponent {...passedProps} />;
}

export default DefinedComponent
