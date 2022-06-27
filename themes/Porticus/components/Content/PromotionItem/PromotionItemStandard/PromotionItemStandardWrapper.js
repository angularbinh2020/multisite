import React from 'react';
import { GridContainer } from '../../../../../../Helpers/JS/Foundation';

const PromotionItemStandardWrapper = ({
	alias,
	componentBackgroundStyle,
	wrapperClasses,
	children
}) => (
	<div className={wrapperClasses} style={componentBackgroundStyle}>
		{alias && <a name={alias}></a>}
		<GridContainer>
			{children}
		</GridContainer>
	</div>
);

export default PromotionItemStandardWrapper;