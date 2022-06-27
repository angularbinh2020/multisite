import React, { useState, useEffect } from 'react';
import { useSystemContext } from '../../../../../Core/Contexts';
import { createBrowserHistory } from 'history';
import {TweenMax, Power2, ScrollToPlugin} from "gsap/all"

import DefaultComponent from './Filter';

const DefinedComponent = (props) => {
	const [{ pageData }] = useSystemContext();
	const listingData = pageData.listing;
	const filterData = pageData.filter;

	const plugins = [ ScrollToPlugin ];

	const [selectedItems, setSelectedItems] = useState([]);
	const [resultsList, setResultsList] = useState([]);
	const [currentNumber, setCurrentNumber] = useState(1);
	const [controlsDisabled, setControlsDisabled] = useState(true);
	const [filterCountTitle, setFilterCountTitle] = useState('');
	const [errorMessage, setErrorMessage] = useState();
	const [updatedPag, setUpdatedPag] = useState();

	const listingEndpointUrl = listingData.listingEndpointUrl;

	const history = createBrowserHistory();

	const scrollToTop = () => {
		const anchorLinkTarget = document.getElementById('filter-top');
		const headerNavigationMenuDimension = document.querySelector('.header-navigation').offsetHeight;

		if(anchorLinkTarget){
			TweenMax.to(window, 1,
				{
					scrollTo: {
						y: anchorLinkTarget.offsetTop - headerNavigationMenuDimension,
						autoKill: false
					},
					ease: Power2.easeInOut
				}
			);
		}
	}

	/**
	 * This function makes a call on the listingEndpointUrl and updates the ResultsList based on the response. It also updates the url
	 */
	const fetchData = (finalUrl, selectionUrlPath, currentNumber, resetUrl) => {
		const decodeFinalUrl = decodeURIComponent(finalUrl);

		fetch(decodeFinalUrl)
			.then(response => response.json())
			.then(data => {
				if (data.items.length === 0) {
					setErrorMessage(data.noResultsMessage);
					setResultsList([]);
				}
				else {
					setResultsList(data.items);
				}
				setFilterCountTitle(data.title);
				setUpdatedPag(data.pagination);

				scrollToTop();
			});
	};

	/**
	 * On mount this component checks for query strings. If there is it gets the page number and the rest of the query. It then sets the current number
	 * and creates the final url. It then triggers updateFilterCategoriesOnLoad, fetchData and then setControlsDisabledd; If there isn't a query string
	 * It just sets the result list. At the end it sets the pagination number
	 */
	useEffect(() => {
		const newFilters = addGroupTitles(filterData.filters);

		setUpdatedPag(listingData.pagination);

		setSelectedItems(newFilters);

		if (filterData.filters) {
			setFilterCountTitle(listingData.title);
		}

		if (listingData.items) {
			setResultsList(listingData.items);
		}

		if (listingData.pagination) {
			setCurrentNumber(listingData.pagination.page);
		}
	}, []);


	const addGroupTitles = (filterItems) => {
		let updatedArray = filterItems.slice(0);

		for (let i = 0; i < updatedArray.length; i++) {
			const thisGroup = updatedArray[i];
			const thisGroupTitle = thisGroup.title;
			const thisGroupKey = thisGroupTitle.replace(/\s+/g, '-').toLowerCase();
			const thisGroupFilterItems = thisGroup.filterItems;
			const titleObject = {
				key: thisGroupKey,
				value: thisGroupTitle,
				selected: 'selected'
			};

			thisGroupFilterItems.unshift(titleObject);

		}

		return updatedArray;
	};


	/**
	 * This loops around selected items and checks if any are selected. If so it fires setControlsDisabled and then breaks the loop. If none are
	 * then it sets the controls to disabled.
	 *
	 */

	const endableControls = (selectedItems) => {
		outer:
		for (let i = 0; i < selectedItems.length; i++) {
			const thisGroup = selectedItems[i];

			for (let j = 0; j < thisGroup.filterItems.length; j++) {

				if (j !== 0) {
					if (selectedItems[i].filterItems[j].selected === 'selected') {
						setControlsDisabled(false);
						break outer;
					}
					else {
						setControlsDisabled(true);
					}
				}
			}
		}
	};

	/**
	 * This function gets the selected option and triggers updateFilterCategoriesHandler with the title and value
	 *
	 * @param {*} event -  the window event
	 * @param {*} title - the group title
	 */
	const updateFilterCategoriesChangeHandler = (event, title) => {
		const selectElement = event.currentTarget;
		const selectedOption = selectElement.options[selectElement.selectedIndex];
		const selectedOptionValue = selectedOption.value;

		updateFilterCategoriesHandler(selectedOptionValue, title);
	};

	/**
	 * This function loops around all the selectedItems. It checks if the title matches the target title. If so it loops around all the
	 * filterItems and checks if any are selected. If so it checks if its set to true or false and switches the value. It then fires
	 * setSelectedItems
	 *
	 */
	const updateFilterCategoriesHandler = (value, title, targetArray) => {
		let newArray = targetArray !== undefined ? targetArray.slice(0) : selectedItems.slice(0);

		for (let i = 0; i < newArray.length; i++) {
			const thisGroup = newArray[i];
			const thisGroupTitle = thisGroup.title;

			if (thisGroupTitle === title) {
				for (let j = 0; j < thisGroup.filterItems.length; j++) {
					const thisValue = thisGroup.filterItems[j];

					if (thisValue.value === value) {
						thisGroup.filterItems.filter((item) => {
							if (item.selected === 'selected') {
								item.selected = '';
							}
						});

						newArray[i].filterItems[j].selected = 'selected';

						endableControls(newArray);
					}
				}
			}
		}

		setSelectedItems(newArray);
		submitQueryHandler()
	
	};

	/**
	 * This loops around all selectedItems. If the element is enabled then it adds it the the groups url. On the last item in the
	 * group it add the group name at the start;
	 *
	 */
	const makeQuery = (selectedItems) => {

		let selectionUrl = '';
		let queryParamsArray = [];

		for (let i = 0; i < selectedItems.length; i++) {
			const thisGroup = selectedItems[i];
			const thisGroupTitle = thisGroup.key;

			let thisGroupTitleValue = '',
				thisGroupSelectedItems = '',
				thisGroupUrl = '';

			for (let j = 0; j < thisGroup.filterItems.length; j++) {
				let thisValue = encodeURIComponent(thisGroup.filterItems[j].key);
				const hasSelectedItems = selectedItems[i].filterItems[j].selected === 'selected';

				if (hasSelectedItems) {

					// Year is filtered by empty value (all years) or year
					thisValue = thisGroupTitle === 'year' && thisValue === 'year' ? '' : thisValue

					if (thisGroupTitleValue === '') {
						thisGroupTitleValue = thisGroupTitle + '=';
						thisGroupSelectedItems = thisGroupSelectedItems + thisValue; // eslint-disable-line
					}
					else {
						thisGroupSelectedItems = thisGroupSelectedItems + ',' + thisValue;
					}
				}

				if (j === thisGroup.filterItems.length - 1) {
					thisGroupUrl = thisGroupUrl + thisGroupTitleValue + thisGroupSelectedItems;
				}
			}


			if(thisGroupUrl){
				queryParamsArray.push(thisGroupUrl)
			}

		}

		selectionUrl =  queryParamsArray.join('&');

		if (selectionUrl.length > 1) {
			return selectionUrl;
		}

		return '';
	};

	/**
	 * This loops around all the selectedItems and sets them all to false then fires setSelectedItems, setControlsDisabled with true, setCurrentNumber with 1
	 * and then submitQuery
	 */
	const clearListHandler = () => {
		for (let i = 0; i < selectedItems.length; i++) {
			const thisGroup = selectedItems[i];

			for (let j = 0; j < thisGroup.filterItems.length; j++) {

				if (j === 0) {
					selectedItems[i].filterItems[j].selected = 'selected';
				}
				else {
					selectedItems[i].filterItems[j].selected = '';
				}
			}
		}

		setControlsDisabled(true);

		setCurrentNumber(1);
		submitQuery(selectedItems, 1, true);
	};

	const submitQueryHandler = () => {
		submitQuery(selectedItems, 1);
	};

	/**
	 * On click it fires makeQuery constructs the finalUrl based on if there are any selected filters. It then does a fetch on that
	 * url and sets the resultsList to the data that's come back
	 */
	const submitQuery = (selectedItems, currentNumber, resetUrl) => {
		const selectionUrlPath = makeQuery(selectedItems);
		const finalUrl = selectionUrlPath.length > 0 ? `${listingEndpointUrl}&page=${currentNumber}&${selectionUrlPath}` : `${listingEndpointUrl}&page=${currentNumber}`;

		if (finalUrl.length > 0) {
			fetchData(finalUrl, selectionUrlPath, currentNumber, resetUrl);
		}
	};

	/**
	 * This updates the current number based on the number passed. It then fires submitQuery
	 */
	const updateCurrentNumberHandler = (thisNumber) => {
		setCurrentNumber(thisNumber);
		submitQuery(selectedItems, thisNumber);
	};

	/**
	 * On click of next or prev it determines what button was pushed. It then increases or decrease the current number and fires
	 * submitQuery
	 */
	const nextPrevHandler = (buttonType) => {
		if (buttonType === 'next') {
			if (currentNumber !== updatedPag.endPage) {
				let newNumber = currentNumber + 1;

				setCurrentNumber(newNumber);
				submitQuery(selectedItems, newNumber);
			}
		}
		else if (currentNumber !== updatedPag.startPage) {
			let newNumber = currentNumber - 1;

			setCurrentNumber(newNumber);
			submitQuery(selectedItems, newNumber);
		}
	};

	const passedProps = {
		clearButton: filterData.clearButton,
		applyButton: filterData.applyButton,
		selectedItems: selectedItems,
		resultsList: resultsList,
		currentNumber: currentNumber,
		controlsDisabled: controlsDisabled,
		filterCountTitle: filterCountTitle,
		errorMessage: errorMessage,
		updatedPag: updatedPag,
		updateFilterCategoriesHandler: updateFilterCategoriesHandler,
		clearListHandler: clearListHandler,
		updateCurrentNumberHandler: updateCurrentNumberHandler,
		updateFilterCategoriesChangeHandler: updateFilterCategoriesChangeHandler,
		nextPrevHandler: nextPrevHandler
	};

	return <DefaultComponent {...passedProps} />;
};

export default DefinedComponent;