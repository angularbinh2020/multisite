import React from 'react';
import { parseJSON } from '../../../../../../Helpers/JS/ParseJSON';
import DecisionOptionsItemButton from './DecisionOptionsItemButton';
import DecisionOptionsItemForm from './DecisionOptionsItemForm';
import reactHtmlParser from 'react-html-parser';

import './DecisionOptionsItem.scss';

const DecisionOptionsItem = ({
	itemProps,
	itemNumber,
	updateCurrentItem,
	isVisible,
	currentItem,
	updateSelectedOption,
	selectedOption,
	selectedCode,
	acceptanceCode,
	showAcceptance
}) => {
  const parsedJson = parseJSON(acceptanceCode);
  
	return isVisible ? (
    <li>
      <h3>{itemProps && itemProps.title}</h3>
      {itemProps.items.length > 1 && itemProps.items.map((item, index) => {
        return (
          <DecisionOptionsItemButton
            key={index}
            updateCurrentItem={updateCurrentItem}
            contentProps={item}
            optionNumber={index}
            itemNumber={itemNumber}
            currentItem={currentItem}
            updateSelectedOption={updateSelectedOption}
            selectedOption={selectedOption}
          />
        );
      })}
      {showAcceptance && parsedJson ? (
        <DecisionOptionsItemForm
          acceptanceCode={parsedJson}
        />
      ) : showAcceptance ? (
        <div>
          {reactHtmlParser(acceptanceCode)}
        </div>
      ) : (
        <div>
          {reactHtmlParser(selectedCode)}
        </div>
      )}
    </li>
	) : null;
};

export default DecisionOptionsItem;