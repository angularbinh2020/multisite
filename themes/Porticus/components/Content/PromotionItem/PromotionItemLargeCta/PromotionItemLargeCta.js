import React from 'react';
import LinkItem from '../../../../../../Lego/Linking/LinkItem';
import './PromotionItemLargeCta.scss';
import { GridX, Cell, GridContainer } from '../../../../../../Helpers/JS/Foundation';

const PromotionItemLargeCta = ({
	link,
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

			{link && (
				<LinkItem
					classes="promotion-item-cta-wrapper"
					url={link.url}
				>
					<GridContainer>
						<GridX className="grid-padding-x">
							<Cell className="small-24 large-6 large-offset-12">
								<p className="promotion-item-cta-title">{link.linkText}</p>
							</Cell>

							<Cell className="small-24 large-12 large-offset-12">
								<img className="promo-item-arrow" src="/ui/icons/PorticusArrow.svg" alt="arrow"></img>
							</Cell>
						</GridX>
					</GridContainer>
				</LinkItem>
			)}
		</div>
	)
};

export default PromotionItemLargeCta;