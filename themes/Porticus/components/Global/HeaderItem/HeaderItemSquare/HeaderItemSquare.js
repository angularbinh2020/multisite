import React from 'react';
import reactHtmlParser from 'react-html-parser';
import UseAnimation from '../../../../../../Legacy/Helpers/JS/UseAnimation'
import { Cell, GridX, GridContainer } from '../../../../../../Helpers/JS/Foundation';
import './HeaderItemSquare.scss';

const HeaderItemSquare = ({
	animationSettings,
	itemClasses,
	title,
	image,
	imageCaption,
	introductionText,
	styles
}) => {
	return (
		<div className={itemClasses}>
			<GridContainer>
				<GridX>
					<Cell className="small-24 medium-20 medium-offset-2">
						<div className="header-item-title-wrapper">
							<UseAnimation animationSettings={animationSettings}>
								<h1 className="header-item-title">{title}</h1>
							</UseAnimation>
						</div>
					</Cell>

					{image && (
						<Cell className="small-24 medium-12 medium-offset-6">
							<div className="header-item-image">
								<UseAnimation animationSettings={animationSettings}>
									<img src={image.cropUrls.square} alt={image.name} />
								</UseAnimation>
							</div>
						</Cell>
					)}

					{introductionText
					&&
						<Cell className="small-24 medium-20">
							<div className="header-item-intro-text">
								<UseAnimation animationSettings={animationSettings}>
									{reactHtmlParser(introductionText.text)}
								</UseAnimation>
							</div>
						</Cell>
					}
				</GridX>
			</GridContainer>

			{image &&
				<div className="colour-block" style={styles}></div>
			}
		</div>
	);
};

export default HeaderItemSquare;