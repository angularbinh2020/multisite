import React from 'react';
import reactHtmlParser from 'react-html-parser';
import UseAnimation from '../../../../../../Legacy/Helpers/JS/UseAnimation'
import { Cell, GridX, GridContainer } from '../../../../../../Helpers/JS/Foundation';
import './HeaderItemShape.scss';

const HeaderItemShape = ({
	animationSettings,
	itemClasses,
	title,
	image,
	introductionText
}) => {
	return (
		<div className={itemClasses}>
			<GridContainer>
				<GridX>
					<Cell className="small-24 large-10">
						<UseAnimation animationSettings={animationSettings}>
							{title && <h1 className="header-item-title">{title}</h1>}
						</UseAnimation>

					</Cell>

					<Cell className="small-24 large-7 large-offset-7">
						{introductionText &&
							<div className="header-item-text-wrapper">
								<div className="header-item-text">
									<UseAnimation animationSettings={animationSettings}>
										{reactHtmlParser(introductionText.text)}
									</UseAnimation>
								</div>
							</div>
						}
					</Cell>

					<Cell className="small-24 large-11 large-offset-5">
						{image &&
							<div className="shape-wrapper">
								<UseAnimation animationSettings={animationSettings}>
									<img className="shape" src={image.url} alt={image.name} />
								</UseAnimation>
							</div>
						}
					</Cell>
				</GridX>
			</GridContainer>
		</div>
	);
};

export default HeaderItemShape;