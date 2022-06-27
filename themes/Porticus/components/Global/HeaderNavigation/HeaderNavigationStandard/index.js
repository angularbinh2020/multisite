import React, { useState, useEffect } from 'react';
import { useSystemContext } from '../../../../../../Core/Contexts';

import DefaultComponent from './HeaderNavigationStandard';

const DefinedComponent = (
	{ template }
) => {
	const [{ globalData }] = useSystemContext();
	const [{ currentLocation }] = useSystemContext();
	const [{ pageData }, dispatchPageData] = useSystemContext(null);
	const [{ panelExperience }, dispatchPanelExperience] = useSystemContext();
	const [lockBody, setLockBody] = useState(false);

	const noScrollclass = 'noscroll';
	const theBody = document.body;

	const manageLock = () => {
		if(pageData.isMenuOpen || pageData.isSearchOpen) {
			setLockBody(true);
		}
		else if(!pageData.isMenuOpen || !pageData.isSearchOpen) {
			setLockBody(false);
		}
	};

	const toggleBodyLock = (triggerElement, conditional) => {
		if (!lockBody) {
			theBody.classList.remove(noScrollclass);
		}
		else {
			theBody.classList.toggle(noScrollclass);
		}
	};

	useEffect(()=> {
		toggleBodyLock(null, true);
	}, [lockBody]);

	const toggleMenu = () => {

		pageData.isSearchOpen = false

		if (panelExperience.isPanelExperience && panelExperience.currentSlide >= panelExperience.slideTarget) {

			if (panelExperience.isReadyForAction) {
				pageData.isMenuOpen = !pageData.isMenuOpen

				pageData.isMenuOpen ? panelExperience.currentSlide = panelExperience.totalSlides : panelExperience.currentSlide = panelExperience.slideTarget - 1;

				dispatchPageData({
					type: 'SET_PAGE_CONTEXT',
					data: pageData
				});
			}

		} else {
			pageData.isMenuOpen = !pageData.isMenuOpen;

			dispatchPageData({
				type: 'SET_PAGE_CONTEXT',
				data: pageData
			});
		}

		manageLock();
	}

	const toggleSearch = () => {
		pageData.isSearchOpen = !pageData.isSearchOpen;

		manageLock();

		dispatchPageData({
			type: 'SET_PAGE_CONTEXT',
			data: pageData
		});
	}

	const onLoadSwipeStart = () => {


		setTimeout(() => {
			panelExperience.onLoadSwipeStart = true
			dispatchPanelExperience({
				type: 'SET_PANEL_EXPERIENCE',
				data: panelExperience
			})

		}, 1400)
	}

	const onLoadSwipeComplete = () => {
		panelExperience.onLoadSwipeComplete = true
		dispatchPanelExperience({
			type: 'SET_PANEL_EXPERIENCE',
			data: panelExperience
		})
	}

	useEffect(()=> {
		toggleBodyLock();
	}, [pageData]);

	const passedProps = {
		currentLocation: currentLocation,
		defaultPage: globalData.defaultPage,
		highlightedNavigation: globalData.highlightedNavigation,
		panelExperience: panelExperience,
		primaryNavigation: globalData.primaryNavigation,
		siteName: globalData.siteName,
		isMenuOpen: pageData ? pageData.isMenuOpen : false,
		isSearchOpen: pageData ? pageData.isSearchOpen : false,
		toggleMenu: toggleMenu,
		toggleSearch: toggleSearch,
		onLoadSwipeStart: onLoadSwipeStart,
		onLoadSwipeComplete: onLoadSwipeComplete
	};

	return <DefaultComponent {...passedProps} />;

};

export default DefinedComponent;