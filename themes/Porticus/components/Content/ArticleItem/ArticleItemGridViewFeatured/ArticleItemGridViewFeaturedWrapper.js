import React from 'react';

const ArticleItemGridViewFeaturedWrapped = ({
	alias,
	children
}) => (
	<React.Fragment>
		{alias && <a name={alias}></a>}
		{children}
	</React.Fragment>
);

export default ArticleItemGridViewFeaturedWrapped;