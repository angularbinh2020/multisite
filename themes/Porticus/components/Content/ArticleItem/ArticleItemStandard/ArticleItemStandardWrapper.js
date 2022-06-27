import React from 'react';

const ArticleItemStandardWrapper = ({
	alias,
	componentBackgroundStyle,
	children
}) => (
	<div style={componentBackgroundStyle}>
		{alias && <a name={alias}></a>}
		{children}
	</div>
);

export default ArticleItemStandardWrapper;