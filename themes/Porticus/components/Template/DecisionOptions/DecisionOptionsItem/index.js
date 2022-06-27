import React, { useEffect, useState } from 'react';
import DefaultComponent from './DecisionOptionsItem';

const DefinedComponent = (props) => {
	const {
		currentItem,
		updateCurrentItem,
		itemNumber,
		itemProps
	} = props;
	const [isVisible, setIsVisible] = useState(false);
	const [selectedOption, setSelectedOption] = useState(false);
	const [selectedCode, setSelectedCode] = useState(0);
	const [acceptanceCode, setAcceptanceCode] = useState('');
	const [showAcceptance, setShowAcceptance] = useState(false);

	const updateSelectedOption = (index, moveNext, rejectOnChoose) => {
    const thisItem = itemProps.items[index];

		setSelectedOption(index);

		if (!moveNext && rejectOnChoose) {
			setSelectedCode(thisItem.rejectionHtml);
			setShowAcceptance(false);
		}
		else if (!moveNext && !rejectOnChoose) {
			setAcceptanceCode(thisItem.acceptanceHtml);
			setShowAcceptance(true);
		}
		else {
			setShowAcceptance(false);
			setSelectedCode(false);
		}
	};

	useEffect(() => {
		if (currentItem >= itemNumber) {
			setIsVisible(true);
		}
		else {
			setIsVisible(false);
		}
	}, [currentItem]);

	const passedProps = {
		isVisible: isVisible,
		itemProps: itemProps,
		itemNumber: itemNumber,
		updateCurrentItem: updateCurrentItem,
		currentItem: currentItem,
		selectedOption: selectedOption,
		updateSelectedOption: updateSelectedOption,
		selectedCode: selectedCode,
		acceptanceCode: acceptanceCode,
		showAcceptance: showAcceptance,
	};

	return <DefaultComponent {...passedProps} />;

};

export default DefinedComponent;
