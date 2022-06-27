import React, { useEffect, useState } from 'react';
import DefaultComponent from './DecisionOptionsItemButton';
import { useSystemContext } from '../../../../../../../Core/Contexts';

const DefinedComponent = (props) => {
	const {
		updateSelectedOption,
		updateCurrentItem,
		currentItem,
		contentProps,
		itemNumber,
		selectedOption,
		optionNumber
	} = props;
	const [isSelected, setIsSelected] = useState(false);

	const handleChange = (index, optionNumber, moveNext, rejectOnChoose) => {
		updateSelectedOption(optionNumber, moveNext, rejectOnChoose);

		if(moveNext) {
			updateCurrentItem(index);
		}

		if(!moveNext && currentItem === index+1) {
			updateCurrentItem(index, true);
		}
	};

	useEffect(()=>{
		if(selectedOption === optionNumber) {
			setIsSelected(true);
		}
		else {
			setIsSelected(false);
		}
	},[selectedOption]);

	const passedProps = {
		contentProps: contentProps,
		itemNumber: itemNumber,
		handleChange: handleChange,
		selectedOption: selectedOption,
		optionNumber: optionNumber,
		isSelected: isSelected
	};

	return <DefaultComponent {...passedProps} />;

};

export default DefinedComponent;
