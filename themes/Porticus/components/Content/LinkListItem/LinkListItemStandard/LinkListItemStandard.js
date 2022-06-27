import React from 'react';
import LinkItem from '../../../../../../Lego/Linking/LinkItem';

import './LinkListItemStandard.scss';

const LinkListItemStandard = ({
	itemClasses,
	cellClasses,
	links,
	subheading,
	title,
	titleLink,
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

			{title && (
				 <h3 className="link-list-item-title">
					 {titleLink ? <LinkItem url={titleLink.url} label={title} /> : title}
				 </h3>
			)}

			{subheading && <span className="link-list-item-subheading">{subheading}</span>}

			{links && (
				<ul>
					{links.map((link, i) => (
						<li key={i}>
							<LinkItem
								url={link.url}
								label={link.linkText}
								classes={'cta'}
							/>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}


export default LinkListItemStandard;