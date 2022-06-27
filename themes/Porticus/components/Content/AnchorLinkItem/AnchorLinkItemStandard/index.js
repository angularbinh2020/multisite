import React from 'react';
import DefaultComponent from './AnchorLinkItemStandard';
import WrapperComponent from './AnchorLinkItemStandardWrapper';
import gsap from 'gsap'
import {TweenMax, Power2, ScrollToPlugin} from "gsap/all"
import useCmsProps from '../../../../Hooks/useCmsProps.js';
gsap.registerPlugin(ScrollToPlugin)

const DefinedComponent = (props) => {
	const cmsProps = useCmsProps(props);

	const handleAnchorEvent = e => {

		const anchorLinksModule = document.querySelector('.anchor-links-module').offsetHeight;
		const headerNavigationMenuDimension = document.querySelector('.header-navigation').offsetHeight;
		const anchorLink = e.target.getAttribute('href').replace('#','');
		const anchorLinkTarget = document.querySelectorAll(`a[name=${anchorLink}]`);

		const plugins = [ ScrollToPlugin ];

		e.preventDefault();
		e.stopPropagation();

		// It is necessary fire runUseAnimation before to scroll to the anchor point.
		if(anchorLinkTarget.length > 0){

			let selectionFired = new CustomEvent("runUseAnimation", {
				"detail": {"targetTop": anchorLinkTarget[0].offsetTop }
			});
	
			window.dispatchEvent(selectionFired);
			
			setTimeout(() => {

				TweenMax.to(window, 1,
					{
						scrollTo: {
							y: anchorLinkTarget[0].offsetTop - (anchorLinksModule + headerNavigationMenuDimension),
							autoKill: false
						},
						ease: Power2.easeInOut
					}
				);
			}, 650)
		}
	}

	const passedProps = {
		itemClasses: props.itemClasses,
		handleAnchorEvent: handleAnchorEvent,
		title: props.title,
		link: props.link,
		...cmsProps
	};

	if (props.isRoot) {
		return (
			<WrapperComponent alias={props.alias}>
				<DefaultComponent {...passedProps} />
			</WrapperComponent>
		);
	}

	return <DefaultComponent {...passedProps} />
};

export default DefinedComponent;