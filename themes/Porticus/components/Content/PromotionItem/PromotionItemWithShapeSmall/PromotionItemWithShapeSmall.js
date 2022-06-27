import React from 'react';
import reactHtmlParser from 'react-html-parser';
import './PromotionItemWithShapeSmall.scss';
import { GridX, Cell, GridContainer } from '../../../../../../Helpers/JS/Foundation';
import LinkItem from '../../../../../../Lego/Linking/LinkItem';

const PromotionItemWithShapeSmall = ({
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
					<Cell className="small-24 large-12">
						{title && (
							<h3 className="carousel-item-title">
								{link ? <LinkItem url={link.url} label={title} /> : title}
							</h3>
						)}
					</Cell>

					<Cell className="small-24 large-10">
						{text && <div className="carousel-item-text">{reactHtmlParser(text)}</div>}

						{link &&
							<LinkItem
								classes={'cta'}
								url={link.url}
								label={link.linkText}
							/>
						}
					</Cell>

					{mediaItem && mediaItem.reactComponent === 'ImageItem' && (
						<React.Fragment>
							<img className="carousel-item-image" src={mediaItem.image.url} alt="{mediaItem.title}" />
						</React.Fragment>
					)}
				</GridX>
			</GridContainer>
		</div>
	)
};

export default PromotionItemWithShapeSmall;