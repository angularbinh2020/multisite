import React from 'react';
import './StatisticItemStandard.scss';

const StatisticItemStandard = ({
	amount,
	description,
	itemClasses,
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
			{amount && <p className="statistic-item-number">{amount}</p>}
			{description && <p className="statistic-item-description">{description}</p>}
		</div>
	)
}

export default StatisticItemStandard;