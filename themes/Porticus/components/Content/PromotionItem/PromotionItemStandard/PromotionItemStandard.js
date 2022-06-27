import React from 'react';
import reactHtmlParser from 'react-html-parser';
import ContentPicker from '../../../../../../Core/ContentPicker';
import { GridX, Cell, GridContainer } from '../../../../../../Helpers/JS/Foundation';
import './PromotionItemStandard.scss';

const PromotionItemStandard = ({
	aspectRatio,
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
					<Cell className="small-24 large-12 promotion-item-media">
						{mediaItem &&
							<ContentPicker content={mediaItem} />
						}
					</Cell>

					<Cell className="small-24 large-12 promotion-item-text-content-wrapper">
						<div className="promotion-item-text-content">
							{title && 
								<h3 className="promotion-item-heading">{title}</h3>
							}

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
						</div>
					</Cell>
				</GridX>
			</GridContainer>
		</div>
	)
};

export default PromotionItemStandard;