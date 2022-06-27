import React from 'react';
import LinkItem from '../../../../../../Lego/Linking/LinkItem';
import './HighlightedNavigationItemStandard.scss';

const HighlightedNavigationItem = ({
	itemClasses,
	icon,
	link,
	documentTypeAlias,
	gaEvent,
	layout
}) => {

	return (
		<React.Fragment>
			{link &&
				<LinkItem
					url={link.url}
					classes={itemClasses}
				>
					{link.linkText}
					{icon && <img className="highlighted-navigation-item-icon" src={icon.url} alt="icon"/> }
				</LinkItem>
			}
		</React.Fragment>
	)
}

export default HighlightedNavigationItem;
