import React from 'react';
import { GridContainer, GridX, Cell } from '../../../../../../Helpers/JS/Foundation';

const ImageItemStandardWrapper = ({
	alias,
	componentBackgroundStyle,
	wrapperClasses,
	children
}) => (
	<div className={wrapperClasses} style={componentBackgroundStyle}>
		{alias && <a name={alias}></a>}
		<GridContainer>
			<GridX>
				<Cell className="small-24 large-18 large-offset-6">
					{children}
				</Cell>
			</GridX>
		</GridContainer>
	</div>
);

export default ImageItemStandardWrapper;