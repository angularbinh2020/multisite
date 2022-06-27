import React from 'react';
import LinkItem from '../../../../../../Lego/Linking/LinkItem';
import './PriorityContentPageListView.scss'

const PriorityContentPageListView = ({
	itemClasses,
	header,
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
					label="Read more"
				>
					<div>
						{header.image && <img src={header.image.url} alt={header.image.name} />}
						{header.title && <h2>{header.title}</h2>}
					</div>
				</LinkItem>
			}
		</div>
	);
}


export default PriorityContentPageListView;