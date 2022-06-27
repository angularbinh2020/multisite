import React, { useState, useEffect } from 'react';
import Template from './SearchResultsLandingPage';
import { useSystemContext } from '../../../../Core/Contexts';
import {TweenMax, Power2, ScrollToPlugin} from "gsap/all"

const DefinedTemplate = (props) => {
	const [{ pageData }] = useSystemContext();
	const [{ searchData }] = useSystemContext();
	const [currentNumber, setCurrentNumber] = useState(1);
	const [searchResults, setSearchResults] = useState(null);
	const [searchTitle, setSearchTitle] = useState('');
	const [searchSuggestions, setSearchSuggestions] = useState('');
	const [updatedPag, setUpdatedPag] = useState();

	const searchEndPoint = pageData.results.resultsEndpointUrl;
	const currentLocation = window.location.pathname;

	const plugins = [ ScrollToPlugin ];

	const styles = {
		backgroundColor: pageData.primaryColour
	};

	const scrollToTop = () => {
		const anchorLinkTarget = document.getElementById('search-top');
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
	};

	const updateData = (searchTerm, currentNumber) => {
		const searchUrl = `${searchEndPoint}&page=${currentNumber}&query=${searchTerm}`;

		fetch(searchUrl)
			.then(response => response.json())
			.then(formatedResponse => {
				const searchTitleAndTerm = formatedResponse.title;

				setSearchResults(formatedResponse.searchResults);
				setSearchSuggestions(formatedResponse.searchSuggestions);
				setUpdatedPag(formatedResponse.pagination);
				setSearchTitle(searchTitleAndTerm);
				scrollToTop();
			});
	};

	useEffect(() => {
		setUpdatedPag(pageData.results.pagination);

		const query = searchData;
		const parsedQuery = encodeURIComponent(query);

		updateData(parsedQuery, currentNumber);

	}, []);


	const updateIsOnSearchPage = (event, inputValue) => {
		window.history.pushState(null, null, `${currentLocation}?query=${inputValue}`);
		setCurrentNumber(1);
		updateData(inputValue, 1);
	};

	const updateCurrentNumberHandler = (thisNumber) => {
		const query = searchData;

		setCurrentNumber(thisNumber);
		updateData(query, thisNumber);
	};

	const nextPrevHandler = (buttonType) => {
		const query = searchData;

		if (buttonType === 'next') {
			if (currentNumber !== updatedPag.endPage) {
				let newNumber = currentNumber + 1;

				setCurrentNumber(newNumber);
				updateData(query, newNumber);
			}
		}
		else if (currentNumber !== updatedPag.startPage) {
			let newNumber = currentNumber - 1;

			setCurrentNumber(newNumber);
			updateData(query, newNumber);
		}
	};

	return (
		<Template
			styles={styles}
			cmsClassName={pageData.documentTypeToCssClass}
			nextPrevHandler={nextPrevHandler}
			updateCurrentNumberHandler={updateCurrentNumberHandler}
			updateIsOnSearchPage={updateIsOnSearchPage}
			searchResults={searchResults}
			searchSuggestions={searchSuggestions}
			searchTitle={searchTitle}
			updatedPag={updatedPag}
			currentNumber={currentNumber}
		/>
	);
};

export default DefinedTemplate;