import React, { useState } from 'react';
import DefaultComponent from './PromotionItemStandard';
import WrapperComponent from './PromotionItemStandardWrapper';
import UseAnimation from '../../../../../../Legacy/Helpers/JS/UseAnimation'
import useBackgroundColour from '../../../../Hooks/useBackgroundColour.js';
import useCmsProps from '../../../../Hooks/useCmsProps.js'; 

const DefinedComponent = (props) => {
	const bgColourProps = useBackgroundColour(props);
	const cmsProps = useCmsProps(props);
	const [isOpen, setIsOpen] = useState(props.isOpen || false);

	const openCloseOverlay = () => {
		setIsOpen(!isOpen);
	};

	const passedProps = {
		isOpen: isOpen,
		itemClasses: props.itemClasses,
		link: props.link,
		mediaItem: props.mediaItem,
		openCloseOverlay: openCloseOverlay,
		text: props.text,
		title: props.title,
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