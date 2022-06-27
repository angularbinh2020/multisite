import React from 'react';
import LinkItem from '../../../../../../Lego/Linking/LinkItem';
import reactHtmlParser from 'react-html-parser';

import './PersonItemStandard.scss'

const PersonItemStandard = ({
	itemClasses,
	name,
	jobTitle,
	biography,
	image,
	link,
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
				{image && <img src={image.url} alt={image.name} />}
			</div>

			{name && <h3 className="person-item-name">{name}</h3>}

			{jobTitle && <h4 className="person-item-job-title">{jobTitle}</h4>}

			{biography && <div>{reactHtmlParser(biography)}</div>}

			{link &&
				<LinkItem
					url={link.url}
					label={link.linkText}
				/>
			}
		</div>
	);
}


export default PersonItemStandard;