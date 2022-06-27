import React from 'react';
import LinkItem from '../../../../../../Lego/Linking/LinkItem';
import { GridContainer, GridX, Cell } from '../../../../../../Helpers/JS/Foundation';

import './StoryItemListView.scss';

const StoryItemListView = ({
	itemClasses,
	title,
	image,
	url,
	documentTypeAlias,
	gaEvent,
	layout
}) =>{
	return (
		<div 
			className={itemClasses}
			data-component-category={gaEvent && gaEvent.componentCategory}
			data-component-layout={layout}
			data-component-doc-type-alias={documentTypeAlias}
		>
			{url &&
				<LinkItem
					url={url}
				>
					<GridContainer>
						<GridX className="grid-padding-x">
							<Cell className="small-8 medium-4">
								{image && <img src={image.cropUrls.square} alt={image.name} />}
							</Cell>

							<Cell className="small-16 medium-20">
								{title && <h3 className="story-item-title">{title}</h3>}
								<img className="story-item-arrow" src="/ui/icons/PorticusArrow.svg" alt="arrow"></img>
							</Cell>
						</GridX>
					</GridContainer>


				</LinkItem>
			}
		</div>
	);
}


export default StoryItemListView;