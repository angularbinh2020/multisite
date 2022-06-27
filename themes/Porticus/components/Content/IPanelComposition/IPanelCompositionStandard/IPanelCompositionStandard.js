import React from 'react';
import { GridX } from '../../../../../../Helpers/JS/Foundation';
import './IPanelCompositionStandard.scss';
import ContentPicker from '../../../../../../Core/ContentPicker';

const IPanelCompositionStandard = ({
	itemClasses,
	gridClasses,
	columnItems
}) => (
	<div className={itemClasses}>
		<GridX className={gridClasses}>
			{columnItems.map((childItem, i) => {
				return (
					<div className={childItem.cellClasses} key={i}>
						<ContentPicker content={childItem} />
					</div>
				);
			})}
		</GridX>
	</div>
);

export default IPanelCompositionStandard;
