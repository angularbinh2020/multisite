import React from 'react';
import ContentPicker from '../../../../../../Core/ContentPicker';
import { GridContainer, GridX, Cell } from '../../../../../../Helpers/JS/Foundation';
import './TabsModuleStandard.scss';

const TabsModuleStandard = ({
	title,
	handleClick,
	isOpen,
	itemClasses,
	tabItems,
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
						{title && <h2 className="tabs-module-title ">{title}</h2>}

						<div className="tabs-module-controls-wrapper">
							<ul className="tabs-module-controls">
								{tabItems &&
									tabItems.map((item, i) => {
										return (
											<li
												data-id={i}
												onClick={handleClick}
												className={isOpen === i ? 'active' : 'in-active'}
												key={i}
											>
												{item.title}
											</li>
										)
									})

								}
							</ul>
						</div>

						{tabItems &&
							tabItems.map((item, i) => (
								<div className={item.cellClasses} key={i}>
									<ContentPicker content={item} isOpen={isOpen === i} />
								</div>
							))
						}
					</Cell>
				</GridX>
			</GridContainer>
		</div>
	)
};

export default TabsModuleStandard;