import React, { useState, useEffect } from 'react';
import DefaultComponent from './DecisionTreeModuleStandard';
import WrapperComponent from './DecisionTreeModuleStandardWrapper';
import UseAnimation from '../../../../../../Legacy/Helpers/JS/UseAnimation';
import useBackgroundColour from '../../../../Hooks/useBackgroundColour.js';
import useCmsProps from '../../../../Hooks/useCmsProps.js';

const DefinedComponent = (props) => {
	const bgColourProps = useBackgroundColour(props);
	const cmsProps = useCmsProps(props);
	const [items, setItems] = useState();
	const [currentItem, setCurrentItem] = useState();
	const [emptyItem, setEmptyItem] = useState(false);
	const [isOpen, setIsOpen] = useState();
	const [currentOption, setCurrentOption] = useState();

	const openDropdownHandler = () => {
		setIsOpen(!isOpen);
	};

	const updateArray = (items) => {
		const arrayCopy = items.slice(0);
		const emptyItem = {
			title : props.dropDownPlaceholderText,
			empty: true
		};

		arrayCopy.unshift(emptyItem);

		return arrayCopy;
	};

	const updateCurrentSelect = (event, title) => {
		let newTitle = title;

		if (!title) {
			const selectElement = event.currentTarget;
			const selectedOption = selectElement.options[selectElement.selectedIndex];
			const selectedOptionValue = selectedOption.value;

			newTitle = selectedOptionValue;
		}

		let newArray = items.slice(0);

		for (let i = 0; i < newArray.length; i++) {
			const thistitle = newArray[i];

			if (thistitle.title === newTitle) {
				const isEmpty = newArray[i].empty;

				newArray.filter((item) => {
					if (item.selected === true) {
						item.selected = false;
					}
				});

				newArray[i].selected = true;
				setCurrentOption(newArray[i].title);
				setCurrentItem(newArray[i]);

				if(isEmpty) {
					setEmptyItem(false);
				}
				else {
					setEmptyItem(true);
				}

				break;

			}
		}

		setItems(newArray);
	};

	const passedProps = {
		title: props.title,
		itemClasses: props.itemClasses,
		items: items,
		currentItem: currentItem,
		openDropdownHandler: openDropdownHandler,
		updateCurrentSelect: updateCurrentSelect,
		currentOption: currentOption,
		isOpen: isOpen,
		emptyItem: emptyItem,
		...cmsProps
	};

	const animationSettings = {
		animationClass: 'fade-up',
		buffer: 0.8
	}

	useEffect(() => {
		let newArray = updateArray(props.items);

		newArray[0].selected = true;
		setItems(newArray);
		setCurrentItem(newArray[0]);
	}, []);

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

};

export default DefinedComponent;