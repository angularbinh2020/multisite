import React from 'react';
import LinkItem from '../../../../../../Lego/Linking/LinkItem';
import { GridX, Cell, GridContainer } from '../../../../../../Helpers/JS/Foundation';
import reactHtmlParser from 'react-html-parser';
import './ExperiencePromoItemStandard.scss'

const ExperiencePromoItemStandard = ({
	itemClasses,
	title,
	description,
	icon1,
	icon2,
	link,
	hoverClass,
	triggerHoverClass,
	documentTypeAlias,
	gaEvent,
	layout
}) => {
	return (
		<div 
			className={itemClasses + (hoverClass ? ' hover' : ' no-hover')}
			data-component-category={gaEvent && gaEvent.componentCategory}
			data-component-layout={layout}
			data-component-doc-type-alias={documentTypeAlias}
		>
			<GridContainer>
				<GridX className="grid-padding-x">
					<Cell className="small-24 large-12">
						{description && <div className="experience-promo-text">{reactHtmlParser(description)}</div>}
					</Cell>

					<Cell className="small-24 large-12">
						{icon1 &&
							<div className="shape-wrapper">
								<img className="shape" src={icon1.url} alt="shape" />
							</div>
						}

						<div className="experience-promo-title-and-link-wrapper">
							<div className="experience-promo-title-and-link">
								{title && <h1 className="experience-promo-title">{title}</h1>}
								{link && (
									<div
									onMouseEnter={triggerHoverClass}
									onMouseLeave={triggerHoverClass}
									>
										<LinkItem
											classes={'experience-promo-link'}
											url={link.url}
										>
											<img className="carousel-nav-arrow" src="/ui/icons/PorticusArrowDown.svg" alt="arrow" />
											<img className="carousel-nav-eye" src="/ui/icons/Eye.svg" alt="eye" />
										</LinkItem>
									</div>
								)}
							</div>
						</div>
					</Cell>
				</GridX>
			</GridContainer>
		</div>
	)
}

export default ExperiencePromoItemStandard;