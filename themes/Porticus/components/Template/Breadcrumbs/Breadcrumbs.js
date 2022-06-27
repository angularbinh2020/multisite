import React from 'react';
import { GridX, Cell, GridContainer } from '../../../../../Helpers/JS/Foundation';
import UseAnimation from '../../../../../Legacy/Helpers/JS/UseAnimation'

import './Breadcrumbs.scss';

const Breadcrumbs = ({
	animationSettings,
	breadcrumbs
}) => {
	return (
		<React.Fragment>
			{breadcrumbs && (
				<div className="breadcrumbs standard">
					<GridContainer>
						<GridX className="grid-padding-x">
							<Cell className="small-24">
								<UseAnimation animationSettings={animationSettings}>
									<ul>
										{breadcrumbs.links.length > 1 && breadcrumbs.links.map((breadcrumb, index) => {
											return (
												<li key={index}>
													{index < breadcrumbs.links.length - 1 ? <a href={breadcrumb.url}>{breadcrumb.linkText}</a> : breadcrumb.linkText} 
												</li>
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

export default Breadcrumbs;