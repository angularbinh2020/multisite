import React from 'react';
import './MediaModuleStandard.scss';
import MediaModuleControls from './MediaModuleControls';
import MediaModuleItem from './MediaModuleItem';
import { GridX, Cell } from '../../../../../../Helpers/JS/Foundation';

const MediaModuleStandard = ({
	currentMediaItems,
	currentPageNumber,
	currentTab,
	itemClasses,
	updateDataHandler,
	alias,
	updateCurrentNumberHandler,
	nextPrevHandler,
	mediaResults,
	mediaPagination,
	mediaTitles,
	documentTypeAlias,
	gaEvent,
	layout,
}) => (
	<div
		className={itemClasses}
		data-component-category={gaEvent && gaEvent.componentCategory}
		data-component-layout={layout}
		data-component-doc-type-alias={documentTypeAlias}
	>
		{alias && <a name={alias}></a>}
		<GridX>
			<Cell className="small-22 small-offset-1 medium-20 medium-offset-2">
				<div className="media-controls-wrapper">
					<ul className="media-controls">
						{mediaTitles &&
							mediaTitles.map((item, i) => (
								<MediaModuleControls
									{...item}
									key={i}
									updateDataHandler={updateDataHandler}
									currentTab={currentTab}
									index={i}
								/>
							))
						}
					</ul>
				</div>
			</Cell>
		</GridX>
		{currentMediaItems &&
			<MediaModuleItem
				{...currentMediaItems}
				currentPageNumber={currentPageNumber}
				updateCurrentNumberHandler={updateCurrentNumberHandler}
				nextPrevHandler={nextPrevHandler}
				mediaResults={mediaResults}
				mediaPagination={mediaPagination}
			/>
		}
	</div>
);

export default MediaModuleStandard;