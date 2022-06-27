import React from 'react';
import { Cell, GridX, GridContainer } from '../../../../../../Helpers/JS/Foundation';
import ContentPicker from '../../../../../../Core/ContentPicker';
import './AccordionModuleNarrow.scss';
import UseAnimation from '../../../../../../Legacy/Helpers/JS/UseAnimation';


const AccordionModuleNarrow = ({
	animationSettings,
	title,
	items,
	updateActiveItem,
	activeItemId,
	styles,
	itemClasses,
	gaEvent,
	layout,
	documentTypeAlias
}) => (
	<React.Fragment>
		<div
			className={itemClasses}
			style={styles}
			data-component-category={gaEvent && gaEvent.componentCategory}
			data-component-layout={layout}
			data-component-doc-type-alias={documentTypeAlias}
		>
			<GridContainer>
				<GridX>
					<Cell className="small-20 small-offset-4 xlarge-22 xlarge-offset-2">
						<div className="accordion-module-canvas" style={styles}>
							<GridX>

								<Cell className="small-24 xlarge-8">
									<div className="accordion-module-title-wrapper">
										{title && (
											<UseAnimation animationSettings={animationSettings}>
												<h2 className="accordion-module-title">{title}</h2>
											</UseAnimation>
										)}
									</div>
								</Cell>

								<Cell className="small-22 xlarge-13 xlarge-offset-2">
									<div className="accordion-list">
										{items &&
											items.map((item, i) => (
												<UseAnimation animationSettings={animationSettings} key={i}>
													<ContentPicker
														content={item}
														index={i}
														updateActiveItem={updateActiveItem}
														activeItemId={activeItemId}
													/>
												</UseAnimation>
											))
										}
									</div>
								</Cell>

							</GridX>
						</div>
					</Cell>
				</GridX>
			</GridContainer>
		</div>
	</React.Fragment>
);

export default AccordionModuleNarrow;
