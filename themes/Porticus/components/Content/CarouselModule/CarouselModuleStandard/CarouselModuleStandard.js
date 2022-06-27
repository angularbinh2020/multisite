import React from 'react';
import './CarouselModuleStandard.scss';
import Slider from 'react-slick';
import '../../../../Styles/slick/slick.scss';
import ContentPicker from '../../../../../../Core/ContentPicker';
import { GridX, Cell, GridContainer } from '../../../../../../Helpers/JS/Foundation';

const CarouselModuleStandard = ({
	itemClasses,
	carouselSlides,
	currentNumber,
	getSlider,
	nextLabel,
	previousLabel,
	settings,
	title,
	triggerGoTo,
	triggerNext,
	triggerPrev,
	updateNumber,
	documentTypeAlias,
	gaEvent,
	layout
}) => {
	const pagination = (totalSlides, currentNumber) => {
		var rows = [];
		for (var i = 0; i < totalSlides; i++) {
			const slideNumber = i + 1;
			rows.push(
				<li key={i}>
					{slideNumber === currentNumber ? 
						<span className="active">{slideNumber}</span>
						:
						<span onClick={() => {triggerGoTo(slideNumber - 1)}}>{slideNumber}</span>}
				</li>
			);
		}

		return rows
	}

	return (
		<div 
			className={itemClasses}
			data-component-category={gaEvent && gaEvent.componentCategory}
			data-component-layout={layout}
			data-component-doc-type-alias={documentTypeAlias}
		>
			<Slider ref={(e) => getSlider(e)}
				{...settings}
				beforeChange={(current, next) => updateNumber(current, next)}
			>
				{carouselSlides &&
					carouselSlides.map((item, i) => (
						<ContentPicker
							content={item}
							key={i}
						/>
					))
				}
			</Slider>
			<GridContainer>
				<GridX className="grid-padding-x">
					<Cell className="small-24 large-12">
						<div className="carousel-nav">
							<span className="nav-prev" onClick={triggerPrev}>
								<span className="show-for-sr">{previousLabel}</span>
								<img className="carousel-nav-arrow" src="/ui/icons/PorticusArrowLeft.svg" alt="arrow"></img>
							</span>
							<ul>
								{pagination(carouselSlides.length, currentNumber)}
							</ul>
							<span className="nav-next" onClick={triggerNext}>
								<span className="show-for-sr">{nextLabel}</span>
								<img className="carousel-nav-arrow" src="/ui/icons/PorticusArrow.svg" alt="arrow"></img>
							</span>
						</div>
					</Cell>
				</GridX>
			</GridContainer>
		</div>
	)
}

export default CarouselModuleStandard;