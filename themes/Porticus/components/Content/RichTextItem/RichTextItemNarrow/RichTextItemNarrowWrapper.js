import React from 'react';
import { GridContainer, GridX, Cell } from '../../../../../../Helpers/JS/Foundation';

const RichTextItemNarrowWrapper = ({
	alias,
	componentBackgroundStyle,
	wrapperClasses,
	children
}) => (
	<div style={componentBackgroundStyle}>
		<GridContainer className={wrapperClasses}>
			{alias && <a name={alias}></a>}
			<GridX className="grid-padding-x">
				<Cell className="small-24 large-12 large-offset-12">
					{children}
				</Cell>
			</GridX>
		</GridContainer>
	</div>
);

export default RichTextItemNarrowWrapper;
