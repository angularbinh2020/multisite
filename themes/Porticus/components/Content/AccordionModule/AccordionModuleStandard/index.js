import React, { useState, useEffect } from 'react';
import {TweenMax, Power2, ScrollToPlugin} from "gsap/all"
import DefaultComponent from './AccordionModuleStandard';
import WrapperComponent from './AccordionModuleStandardWrapper';
import useBackgroundColour from '../../../../Hooks/useBackgroundColour.js';
import useCmsProps from '../../../../Hooks/useCmsProps.js'; 

const DefinedComponent = (props) => {
	const bgColourProps = useBackgroundColour(props);
	const cmsProps = useCmsProps(props);
	const [activeItemId, setActiveItemId] = useState(-1);
	const [selecetTarget, setSlecetTarget] = useState();

	const plugins = [ ScrollToPlugin ];

	var isInViewport = function (element) {
		var bounding = element.getBoundingClientRect();
		return (
			bounding.top >= 0 &&
			bounding.left >= 0 &&
			bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	};

	useEffect(() => {
		const headerNavigationMenuDimension = document.querySelector('.header-navigation').offsetHeight;
	
		if(selecetTarget){
			setTimeout(() => {
				if(!isInViewport(selecetTarget)){
					TweenMax.to(window, 1,
						{
							scrollTo: {
								y: selecetTarget.offsetTop - headerNavigationMenuDimension - 20,
								autoKill: false
							},
							ease: Power2.easeInOut
						}
					);
				}
			}, 250)
		}

	}, [activeItemId])

	const updateActiveItem = (e) => {
		e.preventDefault();

		const newActiveId = Number(e.currentTarget.dataset.id);

		if (activeItemId === newActiveId) {
			setActiveItemId(-1);
		}
		else {
			setActiveItemId(newActiveId);
			setSlecetTarget(e.currentTarget)
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
