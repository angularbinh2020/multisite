import React from 'react';
import reactHtmlParser from 'react-html-parser';
import './PromotionItemWithShape.scss';
import { GridX, Cell, GridContainer } from '../../../../../../Helpers/JS/Foundation';

const PromotionItemWithShape = ({
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
					<Cell className="small-24 large-12 large-offset-2 promotion-item-text-wrapper">

						{link && link.hasLink ? (
							<a className="promotion-item-text-link" href={link.url} target={link.target}>
								<h2 className="promotion-item-heading">{title}</h2>

								{text &&
									<div className="promotion-item-text">
										{text.map((item, i) => (
											<React.Fragment key={i}>{reactHtmlParser(item)}</React.Fragment>
										))}
									</div>
								}

								<div className="promotion-item-link" href={link.url} target={link.target}>
									<img src="/ui/icons/PorticusArrow.svg" alt="play"></img>
								</div>
							</a>
						)
						:
						(
							<div>
								<h2 className="promotion-item-heading">{title}</h2>

								{text &&
									<div className="promotion-item-text">
										{text.map((item, i) => (
											<React.Fragment key={i}>{reactHtmlParser(item)}</React.Fragment>
										))}
									</div>
								}
							</div>
						)}
					</Cell>

					<Cell className="small-24 large-10 promotion-item-media">
						{mediaItem && mediaItem.reactComponent === 'ImageItem' && (
							<React.Fragment>
								<img src={mediaItem.image.url} alt="{mediaItem.title}" />
							</React.Fragment>
						)}
					</Cell>
				</GridX>
			</GridContainer>
		</div>
	)
};

export default PromotionItemWithShape;