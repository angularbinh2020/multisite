import React from 'react';
import LinkItem from '../../../../../../Lego/Linking/LinkItem';
import reactHtmlParser from 'react-html-parser';
import './StoryItemListViewFeatured.scss';
import { GridX, Cell } from '../../../../../../Helpers/JS/Foundation';

const StoryItemListViewFeatured = ({
	itemClasses,
	image,
	summaryText,
	title,
	url,
	documentTypeAlias,
	gaEvent,
	layout
}) =>{
	return (
		<div 
			className={itemClasses}
			data-component-category={gaEvent && gaEvent.componentCategory}
			data-component-layout={layout}
			data-component-doc-type-alias={documentTypeAlias}
		>
			<GridX className="grid-padding-x">
				<Cell className="small-24 large-12">
					{image && <img className="story-item-img" src={image.cropUrls.square} alt={image.name} />}
				</Cell>

				<Cell className="small-24 large-10 large-offset-1">
					{title && <h3 className="story-item-title">{title}</h3>}

					{summaryText && <p className="story-item-summary">{reactHtmlParser(summaryText)}</p>}

					{url &&
						<LinkItem
							url={url}
							label="Read more"
							classes="cta"
						/>
					}
				</Cell>
			</GridX>
		</div>
	);
}


export default StoryItemListViewFeatured;
