import React from 'react';

import './DecisionOptionsItemButton.scss';

const DecisionOptionsItemButton = ({
	contentProps,
	itemNumber,
	handleChange,
	optionNumber,
	isSelected
}) => {
	return (
		<React.Fragment>
			<div className="radio-wrapper">
				<input
					type="radio"
					name={'options-' + itemNumber}
					checked={isSelected}
					onChange={() => handleChange(itemNumber, optionNumber, contentProps.nextStepOnChoose, contentProps.rejectOnChoose)}
				/>
				<div
					className={'radio-replacement' + (isSelected ? ' option-active' : '')}
					onClick={() => handleChange(itemNumber, optionNumber, contentProps.nextStepOnChoose, contentProps.rejectOnChoose)}
				>
				</div>
				<label>{contentProps.label}</label>
			</div>

		</React.Fragment>
	);
};

export default DecisionOptionsItemButton;