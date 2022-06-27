// /* eslinst-disable */

// // includes the import/export for only this Layout
// // only JS relevant to this layout should be here, any common functionality should be in the parent
// import compose from 'recompose/compose';
// import withHandlers from 'recompose/withHandlers';
// import withState from 'recompose/withState';
// import lifecycle from 'recompose/lifecycle';
// import withProps from 'recompose/withProps';
// import branch from 'recompose/branch';
// import renderNothing from 'recompose/renderNothing';
// import withBackgroundColour from '../../../../../../Helpers/JS/withBackgroundColour';
// import asyncComponent from '../../../../../../Helpers/JS/AsyncComponent';
// import { createBrowserHistory } from 'history';

// const history = createBrowserHistory();

// const MediaModuleStandardWrappedAsync = asyncComponent(() => import('./MediaModuleStandardWrapped')); // This splits Themes into chunks

// const updateData = (apiEndPoint, setCurrentMediaItems, setMediaPagination, setCurrentTab, currentPageNumber, currentTab, mediaItems, pagination) => {
// 	// const mediaUrl = `${apiEndPoint}&page=${currentPageNumber}&category=${currentTitle}`;
// 	const mediaUrl = `${apiEndPoint}`;

// 	fetch(mediaUrl)
// 		.then(response => response.json())
// 		.then(formatedResponse => {
// 			setCurrentMediaItems(formatedResponse.mediaItems[currentTab]);
// 			setMediaPagination(formatedResponse.pagination);
// 			setCurrentTab(currentTab);

// 			history.push({
// 				search: `tab-${currentTab}`
// 			});
// 		}).catch(() => {
// 			setCurrentMediaItems(mediaItems[0]);
// 			setMediaPagination(pagination);
// 		});
// };

// const updateDataHandler = ({ apiEndPoint, setCurrentMediaItems, setMediaPagination, setCurrentTitle, setCurrentTab, mediaItems, pagination }) => (title, index, event) => {
// 	event.preventDefault();

// 	setCurrentTitle(title);
// 	setCurrentTab(index);

// 	updateData(apiEndPoint, setCurrentMediaItems, setMediaPagination, setCurrentTab, 1, index, mediaItems, pagination);
// };

// const updateCurrentNumberHandler = ({ apiEndPoint, setCurrentPageNumber, setCurrentMediaItems, setMediaPagination, setCurrentTab, currentTitle, mediaItems, pagination }) => (thisNumber) => {
// 	// const query = window.location.search;
// 	// const inputValue = query.queryString.(7, query.length);
// 	// const parsedInputValue = inputValue.replace(/\s+/g, '+');

// 	setCurrentPageNumber(thisNumber);
// 	updateData(apiEndPoint, setCurrentMediaItems, setMediaPagination, setCurrentTab, thisNumber, currentTitle, mediaItems, pagination);
// };

// const nextPrevHandler = ({ currentPageNumber, setCurrentPageNumber, apiEndPoint, setCurrentMediaItems, setMediaPagination, setCurrentTab, currentTab, mediaItems, pagination }) => (buttonType) => {
// 	const query = window.location.search;
// 	const inputValue = query.substr(7, query.length);
// 	const parsedInputValue = inputValue.replace(/\s+/g, '+');

// 	if (buttonType === 'next') {
// 		if (currentPageNumber !== setMediaPagination.endPage) {
// 			let newNumber = currentPageNumber + 1;

// 			setCurrentPageNumber(newNumber);
// 			updateData(apiEndPoint, setCurrentMediaItems, setMediaPagination, setCurrentTab, newNumber, currentTab, mediaItems, pagination);
// 		}
// 	}
// 	else if (currentPageNumber !== setMediaPagination.startPage) {
// 		let newNumber = currentPageNumber - 1;

// 		setCurrentPageNumber(newNumber);
// 		updateData(apiEndPoint, setCurrentMediaItems, setMediaPagination, setCurrentTab, newNumber, currentTab, mediaItems, pagination);
// 	}
// };

// const componentWillMount = function componentWillMount() {
// 	const queryString = window.location.search;

// 	if (queryString === '') {
// 		this.props.setCurrentMediaItems(this.props.mediaItems[0]);
// 		this.props.setMediaPagination(this.props.pagination);
// 	}
// 	else {
// 		const queryValue = parseInt(queryString.substr(5, queryString.length));

// 		updateData(this.props.apiEndPoint, this.props.setCurrentMediaItems, this.props.setMediaPagination, this.props.setCurrentTab, 1, queryValue, this.props.mediaItems, this.props.pagination);
// 	}
// };

// const getTitles = ({ mediaItems }) => {
// 	if (mediaItems) {
// 		return {
// 			mediaTitles: mediaItems.map((item) => (
// 				{
// 					title: item.title
// 				}
// 			))
// 		};
// 	}

// };

// const MediaModuleStandardWrapped = compose(
// 	withBackgroundColour,
// 	withState('currentTab', 'setCurrentTab', 0),
// 	withState('currentPageNumber', 'setCurrentPageNumber', 1),
// 	withState('currentTitle', 'setCurrentTitle', ''),
// 	withState('currentMediaItems', 'setCurrentMediaItems', null),
// 	withState('mediaPagination', 'setMediaPagination', null),
// 	withProps(getTitles),
// 	withHandlers({ updateDataHandler, updateCurrentNumberHandler, nextPrevHandler }),
// 	lifecycle({ componentWillMount }),
// 	branch(({ mediaItems }) => !mediaItems, renderNothing),
// )(MediaModuleStandardWrappedAsync);

// export { MediaModuleStandardWrapped };


import branch from 'recompose/branch';
import compose from 'recompose/compose';
import nest from 'recompose/nest';
import renderComponent from 'recompose/renderComponent';
import MediaModuleStandard from './MediaModuleStandard';
import MediaModuleStandardWrapper from './MediaModuleStandardWrapper';

const wrappedMediaModuleStandard = nest(
	MediaModuleStandardWrapper,
	MediaModuleStandard
);

export default compose(
	branch(({ isRoot }) => isRoot, renderComponent(wrappedMediaModuleStandard))
)(MediaModuleStandard);