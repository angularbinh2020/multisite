import React from "react";
import reactHtmlParser from 'react-html-parser';
import UseAnimation from '../../../../../../Legacy/Helpers/JS/UseAnimation'
import { Cell, GridX, GridContainer } from '../../../../../../Helpers/JS/Foundation';
import "./HeaderItemSecondaryImage.scss";


const HeaderItemSecondaryImage = ({
	animationSettings,
	itemClasses,
	title,
	image,
	secondaryImage,
	imageCaption,
	styles
}) => {
	return (
		<div className={itemClasses}>
			<GridContainer>
				<GridX>
					<Cell className="small-10 small-offset-14 medium-6 medium-offset-18">
						{secondaryImage && (
							<img className="header-item-secondary-image" src={secondaryImage.url} alt={secondaryImage.name} />
						)}
					</Cell>

					<Cell className="small-24 medium-10">
						<h1 className="header-item-title">{title}</h1>
					</Cell>

					<Cell className="small-24">
						<div className="header-item-image-wrapper">
							<UseAnimation animationSettings={animationSettings}>
								{image && (
									<img className="header-item-image" src={image.cropUrls.letterbox} alt={image.name} />
								)}
							</UseAnimation>
						</div>
					</Cell>
				</GridX>
			</GridContainer>
		</div>
	);
};

export default HeaderItemSecondaryImage;
