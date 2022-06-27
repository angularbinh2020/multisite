import React, { useState } from 'react';
import DefaultComponent from './PromotionItemWithShapeSmall';
import WrapperComponent from './PromotionItemWithShapeSmallWrapper';
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
		title: props.title,
		mediaItem: props.mediaItem,
		text: props.text,
		link: props.link,
		openCloseOverlay: openCloseOverlay,
		isOpen: isOpen,
		itemClasses: props.itemClasses,
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