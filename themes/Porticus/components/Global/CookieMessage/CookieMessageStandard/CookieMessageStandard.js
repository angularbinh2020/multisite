import React from 'react';
import reactHtmlParser from 'react-html-parser';
import { GridX, Cell, GridContainer } from '../../../../../../Helpers/JS/Foundation';

import './CookieMessageStandard.scss'

const CookieMessage = ({
	cookieBanner,
	handleClick,
	hide,
	hidden
}) => {
	return (
		<div className= {`
			cookie-banner standard
			${
				hidden === true ? 'hidden' : 
				hide === false ? 'open' :
				'closed'
			}
		`}>
			<GridContainer className="full">
				<GridX className="grid-padding-x">
					<Cell className="small-24 large-20 large-offset-2">
						<h2 className="cookie-banner-title">
							{cookieBanner.title}
						</h2>
					</Cell>

					<Cell className="small-24 large-14 large-offset-2">
						<div className="cookie-banner-text">
							{reactHtmlParser(cookieBanner.text)}
						</div>
					</Cell>

					<Cell className="small-24 large-4 large-offset-1">
						<span
							className="cookie-banner-close cta"
							onClick={handleClick}
						>
							{cookieBanner.acceptLabel}
						</span>
					</Cell>
				</GridX>
			</GridContainer>
		</div>
	)
}

export default CookieMessage;