import React from 'react';
import reactHtmlParser from 'react-html-parser';
import UseAnimation from '../../../../../../Legacy/Helpers/JS/UseAnimation'
import { Cell, GridX, GridContainer } from '../../../../../../Helpers/JS/Foundation';
import './HeaderItemLanding.scss';

const HeaderItemLanding = ({
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
					<Cell className="small-24 medium-12">
						<div className="header-item-text">
							<UseAnimation animationSettings={animationSettings}>
								<h1 className="header-item-title">{title}</h1>
							</UseAnimation>
							{introductionText
							&&
								introductionText.text.map((item, index) => {
									return (
										<div key={index}>
											<UseAnimation animationSettings={animationSettings}>
												{reactHtmlParser(item)}
											</UseAnimation>
										</div>
									);
								})
							}
						</div>
					</Cell>
					{image && (
						<Cell className="small-16 small-offset-8 medium-8 medium-offset-2">
							<div className="header-item-image">
								<UseAnimation animationSettings={animationSettings}>
									<img src={image.cropUrls.portrait} alt={image.name} />
								</UseAnimation>
							</div>
						</Cell>
					)}
				</GridX>
			</GridContainer>

			{image &&
				<div className="colour-block" style={styles}></div>
			}
		</div>
	);
};

export default HeaderItemLanding;