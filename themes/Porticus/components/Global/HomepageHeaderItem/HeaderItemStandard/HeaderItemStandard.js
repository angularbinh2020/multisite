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
	headerImageItems,
	introductionText,
	styles
}) => {
	return (
		<div className={itemClasses}>
			<GridContainer>
				<GridX className="grid-padding-x">
					<Cell className="small-24 large-12">
						{title && <h3 className="homepage-header-item-title">{title}</h3>}
					</Cell>

					<Cell className="small-24 large-12 large-offset-6">
						<div className="homepage-header-item-images">
								{headerImageItems && headerImageItems.map((item, i) => (
									<div className={`header-item-images position-${i}`} key={i}>
										<ContentPicker
											content={item}
											index={i}
										/>
									</div>
								))}
						</div>
					</Cell>

					<Cell className="small-24 large-6 homepage-header-item-copy-wrapper">
						{introductionText &&
						<div className="homepage-header-item-copy">
							{reactHtmlParser(introductionText.text)}
						</div>
						}
					</Cell>
				</GridX>
			</GridContainer>
		</div>
	);
};

export default HeaderItemStandard;
