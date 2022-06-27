import React from 'react';
import LinkItem from '../../../../../../Lego/Linking/LinkItem';
import reactHtmlParser from 'react-html-parser';

import './StoryItemGridViewFeatured.scss';

const StoryItemGridViewFeatured = ({
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
			<div>
				{image && <img src={image.url} alt={image.name} />}
			</div>

			{title && <h3>{title}</h3>}

			{summaryText && <div>{reactHtmlParser(summaryText)}</div>}

			{url &&
				<LinkItem
					url={url}
					label="Read more"
				/>
			}
		</div>
	);
}


export default StoryItemGridViewFeatured;