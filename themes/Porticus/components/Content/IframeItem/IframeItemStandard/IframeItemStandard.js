import React from 'react';
import './IframeItemStandard.scss';
import reactHtmlParser from 'react-html-parser';
import { GridX, Cell, GridContainer } from '../../../../../../Helpers/JS/Foundation';

const IframeItemStandard = ({
	itemClasses,
	iframeUrl,
	documentTypeAlias,
	gaEvent,
	layout
}) => {
	return (
		<GridContainer>
			<GridX className="grid-padding-x">
				<Cell className="small-24">
					<div 
						className={itemClasses || 'iframe-item'}
						data-component-category={gaEvent && gaEvent.componentCategory}
						data-component-layout={layout}
						data-component-doc-type-alias={documentTypeAlias}
					>
						<iframe src={iframeUrl}></iframe>
					</div>
				</Cell>
			</GridX>
		</GridContainer>
	);
}

export default IframeItemStandard;