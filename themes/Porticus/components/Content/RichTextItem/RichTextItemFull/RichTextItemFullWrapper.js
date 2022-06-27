import React from 'react';
import { GridContainer, GridX, Cell } from '../../../../../../Helpers/JS/Foundation';

const RichTextItemFullWrapper = ({
	alias,
	componentBackgroundStyle,
	wrapperClasses,
	children
}) => (
	<div style={componentBackgroundStyle}>
		<GridContainer className={wrapperClasses}>
			{alias && <a name={alias}></a>}
			<GridX className="grid-padding-x">
				<Cell className="small-24">
					{children}
				</Cell>
			</GridX>
		</GridContainer>
	</div>
);

export default RichTextItemFullWrapper;
