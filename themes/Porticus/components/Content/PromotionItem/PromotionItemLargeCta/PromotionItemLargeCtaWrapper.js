import React from 'react';

const PromotionItemLargeCtaWrapper = ({
	alias,
	componentBackgroundStyle,
	wrapperClasses,
	children
}) => (
	<div className={wrapperClasses} style={componentBackgroundStyle}>
		{alias && <a name={alias}></a>}
		<React.Fragment>
			{children}
		</React.Fragment>
	</div>
);

export default PromotionItemLargeCtaWrapper;