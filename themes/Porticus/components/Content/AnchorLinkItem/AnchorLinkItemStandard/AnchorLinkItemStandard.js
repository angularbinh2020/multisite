import React from "react";

import "./AnchorLinkItemStandard.scss";

const AnchorLinkItemStandard = ({
	itemClasses,
	handleAnchorEvent,
	title,
	link,
	gaEvent,
	layout,
	documentTypeAlias
}) => {
	return (
		<a 
			data-component-category={gaEvent && gaEvent.componentCategory}
			data-component-layout={layout}
			data-component-doc-type-alias={documentTypeAlias}
			onClick={handleAnchorEvent} className={itemClasses} href={link}>{title}</a>
	);
};

export default AnchorLinkItemStandard;
