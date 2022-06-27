import React from 'react';
import ContentPicker from '../../../../../../Core/ContentPicker';
import { GridX, Cell, GridContainer } from '../../../../../../Helpers/JS/Foundation';
import UseAnimation from '../../../../../../Legacy/Helpers/JS/UseAnimation'

import './LinkListModuleStandard.scss';

const LinkListModuleStandard = ({
	animationSettings,
	itemClasses,
	childCellClasses,
	links,
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
					<Cell className="small-24">
						<UseAnimation animationSettings={animationSettings}>
							{title && <h3 className="link-list-module-heading">{title}</h3>}
						</UseAnimation>
					</Cell>

					{links && (

						links.map((link, i) => (
							<Cell className={childCellClasses} key={i}>
								<ContentPicker content={link} />
							</Cell>
						))
					)}
				</GridX>
			</GridContainer>
		</div>
	)
};

export default LinkListModuleStandard;
