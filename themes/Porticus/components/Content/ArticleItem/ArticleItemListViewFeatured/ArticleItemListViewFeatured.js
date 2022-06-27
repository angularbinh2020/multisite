import React from 'react';
import LinkItem from '../../../../../../Lego/Linking/LinkItem';
import './ArticleItemListViewFeatured.scss';

const ArticleItemListViewFeatured = ({
	itemClasses,
	image,
	title,
	publicationDate,
	url,
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
			{url && (
				<LinkItem
					url={url}
				>
					<div>
						{title && <div>{title}</div>}
						{publicationDate && <div>{publicationDate}</div>}
						{image && <img src={image.url} alt={image.name} />}
					</div>
				</LinkItem>
			)}
		</div>
	)
}

export default ArticleItemListViewFeatured;