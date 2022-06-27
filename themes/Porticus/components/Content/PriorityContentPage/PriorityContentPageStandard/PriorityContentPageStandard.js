import React from 'react';
import LinkItem from '../../../../../../Lego/Linking/LinkItem';
import './PriorityContentPageStandard.scss'

const PriorityContentPageStandard = ({
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
					label="test"
				>
					{header.title && <h3>{header.title}</h3>}
					{header.image && (
						<img src={header.image.url} alt={header.image.name} />
					)}
				</LinkItem>
			}
		</div>
	);
}


export default PriorityContentPageStandard;