import React from 'react';
import { Cell, GridX, GridContainer } from '../../../../../../Helpers/JS/Foundation';

const StatisticsModuleStandardWrapper = ({
	alias,
	componentBackgroundStyle,
	wrapperClasses,
	children
}) => (
	<div className={wrapperClasses} style={componentBackgroundStyle}>
		{alias && <a name={alias}></a>}
		<GridContainer>
			<GridX className="grid-padding-x">
				<Cell className="small-24 large-12 large-offset-12">
					{children}
				</Cell>
			</GridX>
		</GridContainer>
	</div>
);

export default StatisticsModuleStandardWrapper;