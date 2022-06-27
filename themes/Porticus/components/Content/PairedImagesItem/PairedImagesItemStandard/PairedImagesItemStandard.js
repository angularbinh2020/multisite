import React from 'react';
import '../../../../Styles/slick/slick.scss';
import './PairedImagesItemStandard.scss'

const PairedImagesItemStandard = ({
	itemClasses,
	largeImage,
	smallImage,
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
			{largeImage && (
				<img className="paired-images-item-large" src={largeImage.cropUrls.portrait} />
			)}

			{smallImage && (
				<img className="paired-images-item-small" src={smallImage.cropUrls.portrait} />
			)}
		</div>
	)
}


export default PairedImagesItemStandard;