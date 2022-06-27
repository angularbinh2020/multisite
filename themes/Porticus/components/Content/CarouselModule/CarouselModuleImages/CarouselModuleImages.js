import React from 'react';
import './CarouselModuleImages.scss';
import Slider from 'react-slick';
import '../../../../Styles/slick/slick.scss';
import ContentPicker from '../../../../../../Core/ContentPicker';
import { GridX, Cell, GridContainer } from '../../../../../../Helpers/JS/Foundation';

const CarouselModuleImages = ({
	itemClasses,
	carouselSlides,
	currentNumber,
	getSlider,
	nextLabel,
	previousLabel,
	settings,
	triggerNext,
	triggerPrev,
	updateNumber,
	documentTypeAlias,
	gaEvent,
	layout
}) => {
	return (
		<div 
			className={itemClasses}
			data-component-category={gaEvent && gaEvent.componentCategory}
			data-component-layout={layout}
			data-component-doc-type-alias={documentTypeAlias}
		>
			<GridContainer>
				<GridX className="grid-padding-x">
					<Cell className="small-24 large-18 large-offset-6">

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

						<div className="carousel-nav">
							<div className="counter">
								<span>{currentNumber}</span>
								<span className="divider">/</span>
								<span>{carouselSlides.length}</span>
							</div>
							<div>
								<span className="nav-prev" onClick={triggerPrev}>{previousLabel}</span>
								<span className="nav-next" onClick={triggerNext}>{nextLabel}</span>
							</div>
						</div>
					</Cell>
				</GridX>
			</GridContainer>
		</div>
	)
}

export default CarouselModuleImages;