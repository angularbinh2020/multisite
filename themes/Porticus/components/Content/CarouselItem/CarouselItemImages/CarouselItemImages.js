import React from 'react';
import reactHtmlParser from 'react-html-parser';
import './CarouselItemImages.scss';

const CarouselItemImages = ({
	itemClasses,
	image,
	imageCaption

}) => {

	return (
		<div className={itemClasses}>
			<img className="carousel-item-image" src={image.cropUrls.rectangle} alt={image.name} />
			{imageCaption && <p className="carousel-item-image-caption">{reactHtmlParser(imageCaption)}</p> }
		</div>
	);
}

export default CarouselItemImages;