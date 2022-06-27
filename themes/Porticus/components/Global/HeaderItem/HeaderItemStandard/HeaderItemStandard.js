import React from "react";
import reactHtmlParser from 'react-html-parser';
import UseAnimation from '../../../../../../Legacy/Helpers/JS/UseAnimation'
import { Cell, GridX, GridContainer } from '../../../../../../Helpers/JS/Foundation';
import ContentPicker from '../../../../../../Core/ContentPicker';
import "./HeaderItemStandard.scss";
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from "constants";


const HeaderItemStandard = ({
	animationSettings,
	itemClasses,
	title,
	image,
	imageCaption,
	images,
	introductionText,
	styles
}) => {
	return (
		<div className={itemClasses}>
			<GridContainer>
				<GridX>
					<Cell className="small-24 medium-20 medium-offset-2">
						<div className="header-title-with-image">
							<UseAnimation animationSettings={animationSettings}>
								<div className="header-item-title-wrapper">
									<h1 className="header-item-title">{title}</h1>
								</div>
								{image && (
									<img className="header-item-image" src={image.cropUrls.letterbox} alt={image.name} />
								)}
							</UseAnimation>
						</div>
					</Cell>

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

export default HeaderItemStandard;
