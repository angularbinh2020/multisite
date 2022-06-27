import React from 'react';
import LinkItem from '../../../../../../Lego/Linking/LinkItem';
import './ArticleItemGridView.scss';

const ArticleItemGridView = ({
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
			{url &&
				<LinkItem
					url={url}
				>
					{image && <img className="priority-content-img" src={image.cropUrls.square} alt={image.name} />}
					<h3 className="priority-content-title">{title}</h3>
				</LinkItem>
			}
		</div>
	)
}

export default ArticleItemGridView;