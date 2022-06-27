import React from 'react';
import LinkItem from '../../../../../../Lego/Linking/LinkItem';

import './TagsStandard.scss'

const TagsStandard = ({
	relatedHubsTitle,
	relatedHubs,
	relatedPrioritiesTitle,
	relatedPriorities
}) => {
	const CreateTagsList = ({title, items}) => (
		<React.Fragment>
			{items.length > 0 && (
				<div className="tags-group">
					<p className="tags-group-title">{title}</p>
					<ul className="tags-list">
						{items.map((item, i) => (
							<li className="tags-tag" key={i}>
								<LinkItem
									url={item.url}
									label={item.linkText}
								/>
								<span className="tag-divider">, </span>
							</li>
						))}
					</ul>
				</div>
			)}
		</React.Fragment>
	)

	return (
		<React.Fragment>
			<div className="tags standard">
				{relatedHubsTitle && relatedHubs && (
					<CreateTagsList title={relatedHubsTitle} items={relatedHubs} />
				)}

				{relatedPrioritiesTitle && relatedPriorities && (
					<CreateTagsList title={relatedPrioritiesTitle} items={relatedPriorities} />
				)}
			</div>
		</React.Fragment>
	)

}

export default TagsStandard;


