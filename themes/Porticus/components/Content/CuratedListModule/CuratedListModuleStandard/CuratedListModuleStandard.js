import React from 'react';
import './CuratedListModuleStandard.scss';
import ContentPicker from '../../../../../../Core/ContentPicker';
import UseAnimation from '../../../../../../Legacy/Helpers/JS/UseAnimation'
import { Cell, GridX, GridContainer } from '../../../../../../Helpers/JS/Foundation';

const CuratedListModuleStandard = ({
	animationSettings,
	itemClasses,
	childItemClasses,
	childLayout,
	noContentBg,
	overrideParent,
	overspillClasses,
	title,
	link,
	content,
	childCellClasses,
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
			<UseAnimation animationSettings={animationSettings}>
				<h2 className="curated-list-title">{title}</h2>
			</UseAnimation>

			<GridContainer>
				<GridX className="grid-padding-x">
					{content && content.map((item, index) => {
						return (
							<Cell className={item.layout === "GridViewFeatured" ? "small-24" :childCellClasses} key={index}>
								<UseAnimation animationSettings={animationSettings}>
									<ContentPicker content={item} />
								</UseAnimation>
							</Cell>
						)
					})}
				</GridX>
			</GridContainer>

			{link && (
				<a href={link.url} target={link.target}>
				<span>{link.linkText}</span>
				<br />
			</a>
			)}

		</div>
	)
}

export default CuratedListModuleStandard;
