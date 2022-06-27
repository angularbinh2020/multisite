import React from 'react';
import './PeopleModuleStandard.scss';
import PersonItem from '../../PersonItem/PersonItemStandard';

import { GridX, Cell } from '../../../../../../Helpers/JS/Foundation';

const PeopleModuleStandard = ({
	people,
	itemClasses,
	alias,
	documentTypeAlias,
	gaEvent,
	layout
}) => {
	return (
		<div 
			className={itemClasses}
			data-component-category={gaEvent && gaEvent.componentCategory}
			data-component-layout={layout}
			data-component-doc-type-alias={documentTypeAlias}
		>
			<GridX className="grid-padding-x">
				{people &&
					people.map((item, i) => (
						<Cell className="small-24 large-8" key={i}>
							<PersonItem {...item} />
						</Cell>
					)
					)
				}
			</GridX>
		</div>
	);
}

export default PeopleModuleStandard;