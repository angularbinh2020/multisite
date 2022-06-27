import React from 'react';
import './ImageItemStandard.scss';

const ImageItemStandard = ({
	itemClasses,
	aspectRatio,
	caption,
	image,
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
			<figure>
				{aspectRatio ?
					<img src={image.cropUrls[aspectRatio]} alt={image.title} />
					:
					<img src={image.cropUrls.landscape} alt={image.title} />
				}

				{caption && <figcaption>{caption}</figcaption>}
			</figure>
		</div>
	)
}

export default ImageItemStandard;