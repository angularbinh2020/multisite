import React from 'react';
import ContentPicker from '../../../../../../Core/ContentPicker';
import reactHtmlParser from 'react-html-parser';
import { GridX, Cell, GridContainer } from '../../../../../../Helpers/JS/Foundation';
import './ExperienceBannerItemStandard.scss'

const ExperienceBannerItemStandard = ({
	itemClasses,
	description,
	pairedImage,
	title,
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
						{title && <h3 className="experience-banner-item-title">{title}</h3>}
					</Cell>

					<Cell className="small-24 large-12 large-offset-6">
						<div className="experience-banner-item-images">
							{pairedImage && <ContentPicker content={pairedImage} />}
						</div>
					</Cell>

					<Cell className="small-24 large-6 experience-banner-item-copy-wrapper">
						{description && <div className="experience-banner-item-copy">{reactHtmlParser(description)}</div>}
					</Cell>
				</GridX>
			</GridContainer>

			<div className="scroll-indicator">
				<span>Scroll</span>
				<img className="story-item-arrow" src="/ui/icons/PorticusArrow.svg" alt="arrow"></img>
			</div>
		</div>
	)
}

export default ExperienceBannerItemStandard;