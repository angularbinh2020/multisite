import React from 'react';
import LinkItem from '../../../../../../Lego/Linking/LinkItem';
import './HubContentPageGridView.scss'

const HubContentPageGridView = ({
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
				>
					{header.image && <img className="hub-content-img" src={header.image.cropUrls.square} alt={header.image.name} />}
					<h3 className="hub-content-title">{header.title}</h3>
				</LinkItem>
			}
		</div>
	);
}


export default HubContentPageGridView;