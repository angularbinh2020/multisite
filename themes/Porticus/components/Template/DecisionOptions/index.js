import React, { useEffect, useState } from 'react';
import DefaultComponent from './DecisionOptions';
import { useSystemContext } from '../../../../../Core/Contexts';


const DefinedComponent = (props) => {
	const [{ pageData }] = useSystemContext();
	const [currentItem, setCurrentItem] = useState(0);

	const updateCurrentItem = (thisNumber, moveDown) => {
		if (thisNumber < pageData.decisionModules.length) {
			const newNumber = thisNumber + 1;

			if (moveDown) {
				setCurrentItem(thisNumber);
			}
			else {
				setCurrentItem(newNumber);
			}
		}
	};

	const passedProps = {
		animationSettings: {
			animationClass: 'fade-up',
			buffer: 0.8
		},
		decisionModules: pageData.decisionModules,
		updateCurrentItem: updateCurrentItem,
		currentItem: currentItem,
	};

	return <DefaultComponent {...passedProps} />;

};

export default DefinedComponent;
