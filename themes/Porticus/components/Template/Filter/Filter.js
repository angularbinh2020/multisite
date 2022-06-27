import React from 'react';
import './Filter.scss';
import FilterResults from './FilterResults';
import FilterOption from './FilterOption';
import Pagination from '../Pagination';
import { Cell, GridX, GridContainer } from '../../../../../Helpers/JS/Foundation';
import UseAnimation from '../../../../../Legacy/Helpers/JS/UseAnimation'

const Filter = ({
	title,
	filterTitle,
	clearButton,
	applyButton,
	updatedPag,
	resultsList,
	selectedItems,
	updateFilterCategoriesHandler,
	updateFilterCategoriesChangeHandler,
	clearListHandler,
	currentNumber,
	updateCurrentNumberHandler,
	nextPrevHandler,
	controlsDisabled,
	filterCountTitle,
	errorMessage
}) => {
	
	const animationSettings = {
		animationClass: 'fade-up',
		buffer: 0.8
	}

	return (
		<div className="filter-wrapper component-wrapper"
			data-component-category='Filter'
			data-component-layout='n/a'
			data-component-doc-type-alias='n/a'
		>
			<GridContainer>
				<a id="filter-top"></a>
				{selectedItems.length > 0 &&
					<GridX className="grid-padding-x">
						<Cell className="small-24">
							<div className="filter-controls-wrapper">
								<UseAnimation animationSettings={animationSettings}>
									<div className="filter-controls">
										{selectedItems.map((filter, i) => (
											<FilterOption
												title={filter.title}
												filterItems={filter.filterItems}
												key={i}
												updateFilterCategoriesHandler={updateFilterCategoriesHandler}
												updateFilterCategoriesChangeHandler={updateFilterCategoriesChangeHandler}
												results={resultsList}
											/>
										))}

										<button className="cta filter-controls-clear" disabled={controlsDisabled} onClick={clearListHandler}>{clearButton}</button>
									</div>
								</UseAnimation>
							</div>
						</Cell>
					</GridX>
				}

				<FilterResults
					results={resultsList}
					errorMessage={errorMessage}
				/>
				
				<Pagination
					{...updatedPag}
					currentNumber={currentNumber}
					updateCurrentNumberHandler={updateCurrentNumberHandler}
					nextPrevHandler={nextPrevHandler}
				/>
			</GridContainer>
		</div>
	);
}

export default Filter;