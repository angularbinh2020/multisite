import React from 'react';
import Primary from './Primary'
import Search from './Search'
import Logo from '../../Logo'
import LinkItem from '../../../../../../Lego/Linking/LinkItem'
import ContentPicker from '../../../../../../Core/ContentPicker';
import './HeaderNavigationStandard.scss';
import { GridX, Cell, GridContainer } from '../../../../../../Helpers/JS/Foundation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Tween, Timeline } from 'react-gsap';

const HeaderNavigationStandard = ({
	currentLocation,
	defaultPage,
	highlightedNavigation,
	panelExperience,
	isMenuOpen,
	isSearchOpen,
	primaryNavigation,
	siteName,
	toggleMenu,
	toggleSearch,
	getInputItem,
	onLoadSwipeStart,
	onLoadSwipeComplete
}) => {
	return (
		<div className={`header-navigation standard 
			${(isMenuOpen ? 'active bg-solid' : 'in-active')}`}
		>
			<GridContainer>
				<GridX>
					<Cell>
						<div className="header-navigation-items-wrapper">
							<div className="header-navigation-items-wrapper-inner">
								<div className="header-navigation-logo-container">
									{defaultPage && (
										<LinkItem classes={'header-navigation-logo'} url={defaultPage.url}>
											{siteName && <span className="show-for-sr">{siteName}</span>}
											{panelExperience.isPanelExperience ? 
													<Timeline
														target={
															<div>
																<Logo />
															</div>
														}
														onStart={onLoadSwipeStart}
														onComplete={onLoadSwipeComplete}
													>



														<Tween 
															from={{ opacity: 0, y: window.innerHeight / 2 }}
															to={{ opacity: 1, y: ((window.innerHeight / 2) -20) }}
															delay={0.5}
															duration={0.5}
														/>
														<Tween 
															to={{ y: 0 }} 
															delay={0.5}
															duration={0.7}
														/>
													</Timeline>
												:
													<Logo /> 
											}
										</LinkItem>
									)}
								</div>

								<div className="header-navigation-list">
									{highlightedNavigation && (
										<ul>
											{highlightedNavigation.map((item, i) => (
												<li 
													className = {item.link.url.indexOf(currentLocation) >= 0 ? 'active' : 'in-active'}
													key={i}
												>
													<ContentPicker content={item} />
												</li>
											))}
										</ul>
									)}
								</div>

								<div className="header-navigation-actions">
									<ul>
										<li className="menu-toggle" onClick={toggleMenu}>{isMenuOpen ? 'Close' : 'Menu'}</li>
										<li className="search-toggle" onClick={toggleSearch}><i>{isSearchOpen ? <FontAwesomeIcon icon={['fal', 'times']} /> : <FontAwesomeIcon icon={['far', 'search']} />}</i></li>
									</ul>
								</div>
							</div>
						</div>

						{isSearchOpen && (
							<div>
								<Search
									isSearchOpen={isSearchOpen}
									toggleSearch={toggleSearch}
									getInputItem={getInputItem}
								/>
							</div>
						)}

						{primaryNavigation && (
							<Primary
								highlightedNavigation={highlightedNavigation}
								primaryNavigation={primaryNavigation}
							/>
						)}
					</Cell>
				</GridX>
			</GridContainer>
		</div>
	);
};

export default HeaderNavigationStandard;
