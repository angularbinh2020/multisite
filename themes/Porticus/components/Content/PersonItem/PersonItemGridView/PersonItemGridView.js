import React from 'react';
import reactHtmlParser from 'react-html-parser';

import './PersonItemGridView.scss'

const PersonItemGridView = ({
	itemClasses,
	name,
	jobTitle,
	biography,
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
			{image && <img className="person-item-img" src={image.cropUrls.square} alt={image.name} />}

			{name && <h4 className="person-item-name">{name}</h4>}

			{jobTitle && <h5 className="person-item-job-title">{jobTitle}</h5>}

			{biography && <div className="person-item-bio">{reactHtmlParser(biography)}</div>}

			{url && <a className="cta" href={url}>View profile</a> }
		</div>
	);
}


export default PersonItemGridView;