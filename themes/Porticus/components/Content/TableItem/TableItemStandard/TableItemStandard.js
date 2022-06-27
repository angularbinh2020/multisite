import React from 'react';
import './TableItemStandard.scss';
import reactHtmlParser from 'react-html-parser';
import { GridX, Cell, GridContainer } from '../../../../../../Helpers/JS/Foundation';

const TableItemStandard = ({
	itemClasses,
	text,
	documentTypeAlias,
	gaEvent,
	layout
}) => {
	return (
		<GridContainer>
			<GridX className="grid-padding-x">
				<Cell className="small-24">
					<div 
						className={itemClasses}
						data-component-category={gaEvent && gaEvent.componentCategory}
						data-component-layout={layout}
						data-component-doc-type-alias={documentTypeAlias}
					>
						<div>{reactHtmlParser(text)}</div>
					</div>
				</Cell>
			</GridX>
		</GridContainer>
	);
}
export default TableItemStandard;