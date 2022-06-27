import React from 'react';
import './DecisionTreeItemStandard.scss'

const DecisionTreeItemStandard = ({
	itemClasses,
	InnerModule,
	itemProps,
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
			{InnerModule &&
				<InnerModule {...itemProps}/>
			}
		</div>
	);
};


export default DecisionTreeItemStandard;



