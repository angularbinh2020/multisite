import React, { useState, useEffect } from 'react';
import WheelReact from 'wheel-react';
import { useSystemContext } from '../../../../../../Core/Contexts';
import DefaultComponent from './PanelExperienceStandard';
import WrapperComponent from './PanelExperienceStandardWrapper';
import useCmsProps from '../../../../Hooks/useCmsProps.js';

const DefinedComponent = (props) => {
	const cmsProps = useCmsProps(props);
	const [{ globalData }] = useSystemContext();
	const [{ panelExperience }, dispatchPanelExperience] = useSystemContext();
	const [{ pageData }, dispatchPageData] = useSystemContext()
	const [eventAction, setEventAction] = useState('noEvent')
	const [sliderElement, setSliderElement] = useState(false)
	const [directionSlide, setDirectionSlide] = useState('')
	const [mouseEvent, setMouseEvent] = useState(false)

	useEffect(() => {
		if (eventAction !== 'noEvent' && eventAction !== 'wheelEvent') {
			triggerGoTo(panelExperience.currentSlide)
		} else {
			setEventAction('')
		}
	}, [panelExperience.currentSlide])

	useEffect(() => {
		if (sliderElement !== false) {
			const sliderChildrens = sliderElement.props.children;

			panelExperience.slideTarget = sliderChildrens[0].length;
			panelExperience.totalSlides = sliderChildrens[0].length + 1;

			dispatchPanelExperience({
				type: 'SET_PANEL_EXPERIENCE',
				data: panelExperience
			});
		}
	}, [sliderElement])

	const getSlider = (event) => {
		if (event !== null && sliderElement === false) {
			setSliderElement(event);
		}
	};

	const triggerGoTo = (slideNumber) => {
		sliderElement.slickGoTo(slideNumber)
	}

	const triggerPrev = () => {
		setDirectionSlide('direction-slide-right')
		sliderElement.slickPrev();
	};

	const triggerNext = () => {
		setDirectionSlide('direction-slide-left')
		sliderElement.slickNext();
	};

	const setReadyForAction = () => {
		panelExperience.isReadyForAction = true;

		dispatchPanelExperience({
			type: 'SET_PANEL_EXPERIENCE',
			data: panelExperience
		})
	}

	const blockMouse = () => {
		setMouseEvent(true);

		setTimeout(() => {
			setMouseEvent(false);
		}, 1300);
	};

	const updateNumber = (current, next) => {

		const nextSlide = next + 1;

		// Update primary menu 
		if (nextSlide === panelExperience.totalSlides) {
			pageData.isMenuOpen = true
		} else {
			pageData.isMenuOpen = false
		}

		dispatchPageData({
			type: 'SET_PAGE_CONTEXT',
			data: pageData
		});

		// Update home experience
		panelExperience.currentSlide = nextSlide
		panelExperience.isReadyForAction = false
		dispatchPanelExperience({
			type: 'SET_PANEL_EXPERIENCE',
			data: panelExperience
		});

	};

	WheelReact.config({
		up: () => {
			if (panelExperience.isPanelExperience) {
				if (!mouseEvent) {
					triggerNext();
					setEventAction('wheelAction');

					blockMouse();
				}

			}
		},
		down: () => {
			if (panelExperience.isPanelExperience) {
				if (!mouseEvent) {
					triggerPrev();
					setEventAction('wheelAction');

					blockMouse();
				}
			}
		}
	});

	const settings = {
		dots: false,
		infinite: false,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipe: true,
		cssEase: 'ease-out',
		arrows: true
	};

	const passedProps = {
		getSlider: getSlider,
		highlightedNavigation: globalData.highlightedNavigation,
		panelExperience: panelExperience,
		itemClasses: props.itemClasses,
		items: props.items,
		primaryNavigation: globalData.primaryNavigation,
		setReadyForAction: setReadyForAction,
		settings: settings,
		updateNumber: updateNumber,
		directionSlide: directionSlide,
		wheelReact: WheelReact,
		...cmsProps
	};

	if (props.isRoot) {
		return (
			<WrapperComponent alias={props.alias}>
				<DefaultComponent {...passedProps} />
			</WrapperComponent>
		);
	}

	return <DefaultComponent {...passedProps} />;

};

export default DefinedComponent;