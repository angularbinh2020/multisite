import React from 'react';
import { GridContainer, GridX, Cell } from '../../../../../../Helpers/JS/Foundation';
import './IPanelCompositionStandard.scss';
import ContentPicker from '../../../../../../Core/ContentPicker';

const IPanelCompositionWrapper = ({
	wrapperClasses,
	innerOverspillClasses,
	gridClasses,
	cellClasses,
	columnItems
}) => (
	<GridContainer className={wrapperClasses}>
		<GridContainer className={innerOverspillClasses}>
			<GridX className={gridClasses}>
				<Cell className={cellClasses}>
					<GridX className={gridClasses}>
						{columnItems.map((childItem, i) => {
							return (
								<div className={childItem.cellClasses} key={i}>
									<ContentPicker content={childItem} />
								</div>
							);
						})}
					</GridX>
				</Cell>
			</GridX>
		</GridContainer>
	</GridContainer>
);

export default IPanelCompositionWrapper;
