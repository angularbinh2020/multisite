import React from 'react';
import UseAnimation from '../../../../../Legacy/Helpers/JS/UseAnimation'
import './Pagination.scss';

const Pagination = ({
	nextPrevHandler,
	pagItems
}) => { 
	const animationSettings = {
		animationClass: 'fade-up',
		buffer: 0.8
	}

	return (
		<UseAnimation animationSettings={animationSettings}>
			<ul
				className="pagination"
				role="navigation"
				aria-label="Pagination"
				data-component-category='Pagination'
				data-component-layout='n/a'
				data-component-doc-type-alias='n/a'
			>
				<li className="pagination-previous">
					<span aria-label="Previous" onClick={() => nextPrevHandler('prev')}>
						<img className="carousel-nav-arrow" src="/ui/icons/PorticusArrowLeft.svg" alt="arrow"></img>
					</span>
				</li>

				{pagItems}

				<li className="pagination-next">
					<span aria-label="Next" onClick={() => nextPrevHandler('next')}>
						<img className="carousel-nav-arrow" src="/ui/icons/PorticusArrow.svg" alt="arrow"></img>
					</span>
				</li>
			</ul>
		</UseAnimation>
	);
}

export default Pagination;