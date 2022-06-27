import React from 'react';
import ContentPicker from '../../../../../../Core/ContentPicker';
import './QuoteItemLandscapeMedia.scss';
import { GridX, Cell, GridContainer } from '../../../../../../Helpers/JS/Foundation';
import reactHtmlParser from 'react-html-parser';

const QuoteItemLandscapeMedia = ({
	itemClasses,
	authorName,
	authorTitle,
	mediaItem,
	quote,
	documentTypeAlias,
	gaEvent,
	layout
}) => {
	return (
		<div 
			className={itemClasses}
			data-component-category={gaEvent && gaEvent.componentCategory}
			data-component-layout={layout}
			data-component-doc-type-alias={documentTypeAlias}
		>
			<GridContainer>
				<GridX className="grid-padding-x">
					<Cell className="small-24 large-14 quote-item-media">
						{mediaItem && (
							<ContentPicker content={mediaItem} />
						)}
					</Cell>
					<Cell className="small-24 large-10 quote-item-text">
						<blockquote>
							{quote && <p className="quote">{reactHtmlParser(quote)}</p>}
							{authorName && <p className="author-name">{authorName}</p>}
							{authorTitle && <p className="author-title">{authorTitle}</p>}
						</blockquote>
					</Cell>
				</GridX>
			</GridContainer>
		</div>
	);
}

export default QuoteItemLandscapeMedia;
