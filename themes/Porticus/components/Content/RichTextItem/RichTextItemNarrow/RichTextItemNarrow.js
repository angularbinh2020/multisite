import React from 'react';
import './RichTextItemNarrow.scss';

const RichTextItemNarrow = ({
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
		dangerouslySetInnerHTML={{ __html: text }}>
	</div>

);

export default RichTextItemNarrow;