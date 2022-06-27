import React from 'react';
import './AutoListModuleStandard.scss';
import ContentPicker from '../../../../../../Core/ContentPicker';
import UseAnimation from '../../../../../../Legacy/Helpers/JS/UseAnimation'
import { Cell, GridX, GridContainer } from '../../../../../../Helpers/JS/Foundation'

const AutoListModuleStandard = ({
	animationSettings,
	title,
	itemClasses,
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
			<GridContainer>
				<GridX className="grid-padding-x">
					{title &&
						<Cell className="small-24">
						<UseAnimation animationSettings={animationSettings}>
							<h2 className="auto-list-module-title">{title}</h2>
						</UseAnimation>
						</Cell>
					}

					{content && content.items.map((item, index) => {
						item.isAutoList = true;
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
};

export default AutoListModuleStandard;