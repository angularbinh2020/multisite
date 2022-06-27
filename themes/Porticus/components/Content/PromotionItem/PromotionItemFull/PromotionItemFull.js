import React from 'react';
import reactHtmlParser from 'react-html-parser';
import './PromotionItemFull.scss';
import { GridX, Cell, GridContainer } from '../../../../../../Helpers/JS/Foundation';

const PromotionItemFull = ({
	title,
	mediaItem,
	text,
	link,
	openCloseOverlay,
	isOpen,
	itemClasses,
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
					<Cell className="small-24 promotion-item-media">
						{mediaItem && mediaItem.reactComponent === 'ImageItem' && (
							<React.Fragment>
								<img src={mediaItem.image.cropUrls.letterbox} alt="{mediaItem.title}" />
							</React.Fragment>
						)}
					</Cell>
				</GridX>

				<GridX>
					<Cell className="small-24 large-6 large-offset-8">
						<h3 className="promotion-item-heading">{title}</h3>
					</Cell>

					<Cell className="small-24 large-8 large-offset-2">
						{text && 
							<div className="promotion-item-text">
								{text.map((item, i) => (
									<React.Fragment key={i}>{reactHtmlParser(item)}</React.Fragment>
								))}
							</div>
						}

						{link && link.hasLink && (
							<a className="cta" href={link.url} target={link.target}>
								{link.linkText}
							</a>
						)}
					</Cell>
				</GridX>
			</GridContainer>
		</div>
	)
};

export default PromotionItemFull;