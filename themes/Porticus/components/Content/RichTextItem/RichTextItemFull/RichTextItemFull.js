import React from 'react';
import './RichTextItemFull.scss';

const RichTextItemFull = ({
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

export default RichTextItemFull;
