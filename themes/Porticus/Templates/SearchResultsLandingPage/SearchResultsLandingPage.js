import React from 'react';
import './SearchResultsLandingPage.scss';
import HeaderNavigationStandard from '../../Components/Global/HeaderNavigation';
import Footer from '../../Components/Global/FooterItem';
import CookieMessage from '../../Components/Global/CookieMessage';
import SearchInput from '../../Components/Global/HeaderNavigation/HeaderNavigationStandard/Search/SearchInput';
import Pagination from '../../Components/Template/Pagination';
import reactHtmlParser from 'react-html-parser';
import { GridX, Cell, GridContainer } from '../../../../Helpers/JS/Foundation';


const SearchResultsLandingPage = ({
	styles,
	cmsClassName,
	searchTitle,
	searchResults,
	searchSuggestions,
	updatedPag,
	currentNumber,
	updateCurrentNumberHandler,
	nextPrevHandler
}) => {
	return (
		<div className={`page-bg-colour-wrapper ${cmsClassName}`} style={styles}>
			<HeaderNavigationStandard />
			<CookieMessage />
			<GridContainer>
				<GridX className="grid-padding-x">
					<Cell className="small-24 large-22 large-offset-1">
						<div className="search-results-content-wrapper">
							<GridX>
								<Cell className="large-16 large-offset-4">
									<a id="search-top"></a>
									<div className="search-results-content">
										<SearchInput />
										{searchTitle && <p className="search-number-of-items">{searchTitle}</p>}

										<GridX>
											<Cell className="small-24 large-16">
												<ul className="search-results-list">
													{searchResults && searchResults.map((resultItem, i) => (
														<li key={i}>
															<a href={resultItem.url} >
																<h3 className="search-result-item-title">{resultItem.title}</h3>
																<p className="search-result-item-description">{resultItem.description}</p>
																<p className="search-result-item-date">Last updated: {resultItem.date}</p>
															</a>
														</li>
													))}
												</ul>
											</Cell>
										</GridX>

										{searchResults && searchResults.length === 0 && searchSuggestions && (
											<div className="search-suggestions">
												{reactHtmlParser(searchSuggestions)}
											</div>
										)}

										{updatedPag &&
											<Pagination
												{...updatedPag}
												currentNumber={currentNumber}
												updateCurrentNumberHandler={updateCurrentNumberHandler}
												nextPrevHandler={nextPrevHandler}
											/>
										}
									</div>
								</Cell>
							</GridX>
						</div>
					</Cell>
				</GridX>
			</GridContainer>

			<Footer />
		</div>
	);
};

export default SearchResultsLandingPage;
