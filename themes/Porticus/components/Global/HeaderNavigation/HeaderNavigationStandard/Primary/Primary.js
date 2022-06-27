import React from 'react';
import LinkItem from '../../../../../../../Lego/Linking/LinkItem'
import ContentPicker from '../../../../../../../Core/ContentPicker'
import { Cell, GridX } from '../../../../../../../Helpers/JS/Foundation';


import './Primary.scss';

const Primary = ({
	highlightedNavigation,
	primaryNavigation
}) => {
	return (
		<GridX>
			<Cell className="small-24 large-22 large-offset-1">
				<nav className="primary-nav">
					<div className="primary-nav-lists">
						{highlightedNavigation && (
							<ul className="primary-nav-highlighted-menu-mobile">
								{highlightedNavigation.map((item, i) => (
									<li key={i}>
										<ContentPicker content={item} />
									</li>
								))}
							</ul>
						)}

						{primaryNavigation.map((item, i) => (
							<React.Fragment key={i}>
								<div className="primary-nav-list">
									{item.title && (
										<h3 className="primary-nav-list-title">{item.title}</h3>
									)}
									<ul>
										{item.navigationLinks.map((item, i) => (
											<li className="primary-nav-item" key={i}>
												<LinkItem
													url={item.url}
													label={item.linkText}
												/>
											</li>
										))}
									</ul>
								</div>
							</React.Fragment>
						))}
					</div>
				</nav>
			</Cell>
		</GridX>
	);
};

export default Primary;
