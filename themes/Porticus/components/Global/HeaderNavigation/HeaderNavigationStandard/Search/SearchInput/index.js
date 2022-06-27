import React, { useEffect, useState } from 'react';
import DefaultComponent from './SearchInput';
import compose from 'recompose/compose';
import { withRouter } from 'react-router';
import { useSystemContext } from '../../../../../../../../Core/Contexts';

const DefinedComponent = (props) => {
	const [inputValue, setInputValue] = useState('');
	const [{ appData }] = useSystemContext();
	const [{ globalData }] = useSystemContext();
	const [{ pageData }, dispatchPageData] = useSystemContext();
	const [{ searchData }, dispatchSearchData] = useSystemContext();
	const [{ currentLocation }, dispatchCurrentLocation] = useSystemContext();
	const { history } = props;

	useEffect(() => {
		const preservSearchValue = window.location.pathname.indexOf('/search-results/') > -1 && searchData ? searchData : '' 
		setInputValue(preservSearchValue)
	}, [])

	const updateInputValue = (evt) => {
		setInputValue(evt.target.value);
	};

	const swapPageData = async () => {
		const target = '/en/search-results/';
		const pageInfoTarget = `${appData.apiEndPointsPrefix}${target}index.json`;
		const pageInfoData = await fetch(pageInfoTarget);
		const pageInfoDataJSON = await pageInfoData.json();

		dispatchSearchData({
			type: 'SET_SEARCHTERM',
			data: inputValue
		});

		history.push({
			pathname: target
		});

		dispatchCurrentLocation({
			type: 'SET_CURRENT_LOCATION',
			data: window.location.pathname
		});

		dispatchPageData({
			type: 'SET_PAGE_CONTEXT',
			data: pageInfoDataJSON
		});
	};

	const pushPage = () => {

		if (inputValue === null) {
			return;
		}

		if (props.toggleSearch) {
			props.toggleSearch();
		}

		swapPageData();
	};

	const checkKey = (event) => {
		if (event.key === 'Enter') {
			pushPage();
		}
	};

	const getResults = () => {
		pushPage(props.toggleSearch);
	};

	const passedProps = {
		inputValue: inputValue,
		checkKey: checkKey,
		getResults: getResults,
		updateInputValue: updateInputValue,
		isSearchOpen: props.isSearchOpen,
		toggleSearch: props.toggleSearch,
		placeholder: globalData.searchPlaceholder
	};

	return <DefaultComponent {...passedProps} />;

};

const DefaultComponentWithRouter = withRouter(DefinedComponent);

export default DefaultComponentWithRouter;
