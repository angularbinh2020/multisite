import React, { useState, useEffect } from 'react';
import DefaultComponent from './FilterOption';

const DefinedComponent = (props) => {
	const {
		filterItems,
		title,
		updateFilterCategoriesHandler,
		updateFilterCategoriesChangeHandler,
		results
	} = props;
	const [isOpen, setIsOpen] = useState();
	const [selectedOption, setSelectedOption] = useState();
	const [currentOption, setCurrentOption] = useState();

	const openDropdownHandler = () => {
		setIsOpen(!isOpen);
	};

	const bodyTrigger = () => {
		setIsOpen(false);
	};

	useEffect(() => {
		for (let index = 0; index < filterItems.length; index++) {
			const thisFilterItem = filterItems[index];

			if (thisFilterItem.selected === 'selected') {
				setSelectedOption(thisFilterItem.value);

				break;
			}
		}
	});

	useEffect(() => {
		document.body.addEventListener('click', bodyTrigger);

		return () => {
			document.body.removeEventListener('click', bodyTrigger);
		};
	}, []);

	useEffect(() => {
		setCurrentOption(selectedOption);
	}, [selectedOption]);

	useEffect(() => {
		setIsOpen(false);
	}, [results]);

	const passedProps = {
		title: title,
		filterItems: filterItems,
		updateFilterCategoriesHandler: updateFilterCategoriesHandler,
		updateFilterCategoriesChangeHandler: updateFilterCategoriesChangeHandler,
		openDropdownHandler: openDropdownHandler,
		isOpen: isOpen,
		currentOption: currentOption
	};

	return <DefaultComponent {...passedProps} />;
};

export default DefinedComponent;