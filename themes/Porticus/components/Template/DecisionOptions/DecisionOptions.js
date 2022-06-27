import React from 'react';
import { GridX, Cell, GridContainer } from '../../../../../Helpers/JS/Foundation';
import UseAnimation from '../../../../../Legacy/Helpers/JS/UseAnimation';
import DecisionOptionsItem from './DecisionOptionsItem';
import reactHtmlParser from 'react-html-parser';
import LinkItem from '../../../../../Lego/Linking/LinkItem'

import './DecisionOptions.scss';

const DecisionOptions = ({
	animationSettings,
	decisionModules,
	updateCurrentItem,
	currentItem
}) => {
	return (
		<React.Fragment>
			<a name="decision-options"></a>
			{decisionModules && (
				<div className="decision-options standard component-wrapper">
					<GridContainer>
						<GridX className="grid-padding-x">
							<Cell className="small-24 large-12 large-offset-12">
								<UseAnimation animationSettings={animationSettings}>
									<ul>
										{decisionModules.length > 1 && decisionModules.map((item, index) => {
											return (
												<DecisionOptionsItem
													key={index}
													itemProps={item}
													updateCurrentItem={updateCurrentItem}
													itemNumber={index}
													currentItem={currentItem}
												/>
											);
										})}
									</ul>
								</UseAnimation>
							</Cell>
						</GridX>
					</GridContainer>
				</div>
			)}
		</React.Fragment>
	)
}

export default DecisionOptions;