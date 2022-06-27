import React from 'react';
import LinkItem from '../../../../../../Lego/Linking/LinkItem';
import reactHtmlParser from 'react-html-parser';

import './HubContentPageStandard.scss'

const HubContentPageStandard = ({
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
			<div>
				{header.image && <img src={header.image.url} alt={header.image.name} />}
			</div>

			<div>
				{header.title && <h2>{header.title}</h2>}

				{header.introductionText && <div>{reactHtmlParser(header.introductionText.text[0])}</div>}

				{url &&
					<LinkItem
						url={url}
						label="Read more"
					/>
				}
			</div>
		</div>
	);
}


export default HubContentPageStandard;