import React from 'react';
import LinkItem from '../../../../../../Lego/Linking/LinkItem';
import reactHtmlParser from 'react-html-parser';

import './GridView.scss'

const PersonItem = ({
	itemClasses,
	name,
	jobTitle,
	biography,
	image,
	link
}) =>{
	return (
		<div className={`grid-view ${itemClasses}`}>
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

export default PersonItem;