import React from 'react';
import './LinkListItemWithArrow.scss'
import UseAnimation from '../../../../../../Legacy/Helpers/JS/UseAnimation';

const LinkListItemWithArrow = ({
	animationSettings,
	itemClasses,
	cellClasses,
	links,
	title,
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
			{links && (
				<ul>
					{links.map((link, i) => (
						<li key={i}>
							<UseAnimation animationSettings={animationSettings}>
								<a href={link.url}>
									<span className="list-item-text">{link.linkText}</span>
									<img className="list-item-arrow" src="/ui/icons/PorticusArrow.svg" alt="arrow"></img>
								</a>
							</UseAnimation>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}


export default LinkListItemWithArrow;