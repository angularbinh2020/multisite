import React from 'react';
import ContentPicker from '../../../../../../Core/ContentPicker';
import { GridX } from '../../../../../../Helpers/JS/Foundation';
import UseAnimation from '../../../../../../Legacy/Helpers/JS/UseAnimation';

import './StatisticsModuleStandard.scss';

const StatisticsModuleStandard = ({ 
	animationSettings,
	itemClasses, 
	statisticItems, 
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
			<UseAnimation animationSettings={animationSettings}>
				<h2 className="statistics-module-heading">{title}</h2>
			</UseAnimation>
			{statisticItems &&
				<GridX>
					{statisticItems.map((item, i) => (
						<div className="small-24 medium-12" key={i}>
							<UseAnimation animationSettings={animationSettings}>
								<ContentPicker content={item} />
							</UseAnimation>
						</div>
					))}
				</GridX>
			}
		</div>
	)
}

export default StatisticsModuleStandard;