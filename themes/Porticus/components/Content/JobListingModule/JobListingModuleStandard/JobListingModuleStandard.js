import React from 'react';
import { Cell, GridX, GridContainer } from '../../../../../../Helpers/JS/Foundation';
import ContentPicker from '../../../../../../Core/ContentPicker';
import UseAnimation from '../../../../../../Legacy/Helpers/JS/UseAnimation';
import './JobListingModuleStandard.scss';

const JobListingModuleStandard = ({
	animationSettings,
	title,
	items,
	updateActiveItem,
	activeItemId,
	styles,
	itemClasses,
	linkName,
	jobContentLink,
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
				<GridX className="grid-padding-x">
					<Cell className="small-24">

						{title && (
							<UseAnimation animationSettings={animationSettings}>
								<h2 className="joblisting-module-title">{title}</h2>
							</UseAnimation>
						)}

						{items &&
							items.map((item, i) => (
								<UseAnimation animationSettings={animationSettings} key={i}>
									<ContentPicker
										key={i}
										content={item}
										index={i}
										updateActiveItem={updateActiveItem}
										activeItemId={activeItemId}
										linkName={linkName}
										jobContentLink={jobContentLink}
									/>
								</UseAnimation>
							))
						}
					</Cell>
				</GridX>
			</GridContainer>
		</div>
	</React.Fragment>
);

export default JobListingModuleStandard;