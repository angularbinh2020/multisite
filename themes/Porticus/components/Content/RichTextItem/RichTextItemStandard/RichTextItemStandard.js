import React from 'react';
import './RichTextItemStandard.scss';

const RichTextItemStandard = ({
	itemClasses,
	text,
	gaEvent,
	documentTypeAlias,
	layout
}) => (
	<div
		className={itemClasses}
		data-component-category={gaEvent && gaEvent.componentCategory}
		data-component-layout={layout}
		data-component-doc-type-alias={documentTypeAlias}
		dangerouslySetInnerHTML={{ __html: text }}
	/>
);

export default RichTextItemStandard;
