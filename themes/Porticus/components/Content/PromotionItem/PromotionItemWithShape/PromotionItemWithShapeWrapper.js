import React from 'react';
import { GridContainer } from '../../../../../../Helpers/JS/Foundation';

const PromotionItemWithShapeWrapper = ({
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

export default PromotionItemWithShapeWrapper;