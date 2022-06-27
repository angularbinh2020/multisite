import React, { useState } from 'react';
import DefaultComponent from './CarouselModuleStandard';
import WrapperComponent from './CarouselModuleStandardWrapper';
import useBackgroundColour from '../../../../Hooks/useBackgroundColour.js';
import UseAnimation from '../../../../../../Legacy/Helpers/JS/UseAnimation'
import useCmsProps from '../../../../Hooks/useCmsProps.js';

const DefinedComponent = (props) => {
	const bgColourProps = useBackgroundColour(props);
	const cmsProps = useCmsProps(props);
	const [currentNumber, setCurrentNumber] = useState(1);
	let sliderElement = false;

	if(!props.carouselSlides) return (null);

	const getSlider = (event) => {
		if (event !== null && sliderElement === false) {
			sliderElement = event;
		}
	};

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false
	};

	const triggerGoTo = (slideNumber) => {
		sliderElement.slickGoTo(slideNumber)
	}

	const triggerPrev = () => {
		sliderElement.slickPrev();
	};

	const triggerNext = () => {
		sliderElement.slickNext();
	};

	const updateNumber = (current, next) => {
		setCurrentNumber(next+1);
	};

	const passedProps = {
		itemClasses: props.itemClasses,
		carouselSlides: props.carouselSlides,
		currentNumber: currentNumber,
		getSlider: getSlider,
		nextLabel: props.nextLabel,
		previousLabel: props.previousLabel,
		settings: settings,
		title: props.title,
		triggerGoTo: triggerGoTo,
		triggerNext: triggerNext,
		triggerPrev: triggerPrev,
		updateNumber: updateNumber,
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
}

export default DefinedComponent
