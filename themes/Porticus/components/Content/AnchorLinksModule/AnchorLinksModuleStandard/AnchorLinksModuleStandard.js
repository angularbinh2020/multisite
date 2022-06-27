import React from "react";
import ContentPicker from '../../../../../../Core/ContentPicker';
import "./AnchorLinksModuleStandard.scss";
import { GridX, Cell, GridContainer } from '../../../../../../Helpers/JS/Foundation';

const AnchorLinksModuleStandard = ({
	itemClasses,
	anchorLinks,
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
						<div className="anchor-links-wrapper">
							<div className="anchor-links">
								{anchorLinks && anchorLinks.map((item, index) => {
									return (
										<ContentPicker key={index} content={item} />
									);
								})}
							</div>
						</div>
					</Cell>
				</GridX>
			</GridContainer>
		</div>
	);
};

export default AnchorLinksModuleStandard;
