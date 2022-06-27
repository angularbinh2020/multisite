import React from 'react';
import './MediaModuleItem.scss';
import { GridX, Cell } from '../../../../../../../Helpers/JS/Foundation';
// import Pagination from '../../../../Template/Pagination';
// import ImageOrBackground from '../../../../../../../Lego/ImageOrBackground';

const MediaModuleItem = ({
	subtitle,
	image,
	imageCaption,
	mediaItemsList,
	mediaPagination,
	currentPageNumber,
	updateCurrentNumberHandler,
	nextPrevHandler,
	bgImage
}) => ( // implicit RETURN
	<div className="media-module-item">
		<GridX>
			<Cell className="small-24 medium-22">
				{image &&
					<div className="media-module-item-image" style={bgImage}>
						{(imageCaption && imageCaption.length > 0) &&
							<span className="bg-image-caption" dangerouslySetInnerHTML={{ __html: imageCaption }}></span>
						}
					</div>
				}
			</Cell>

			<Cell className="small-24 medium-18 medium-offset-4">
				{subtitle && <p className="media-module-item-title">{subtitle}</p>}
				<ul className="media-module-item-list">
					{mediaItemsList &&
						mediaItemsList.map((item, i) => (
							<li key={i}>
								{/* {image && <ImageOrBackground
									classes="add-active-child"
									images={
										{
											desktop: {
												cropUrl: item.image.cropUrls.landscape,
												width: 1400,
											},
											tablet: {
												cropUrl: item.image.cropUrls.landscape,
												width: 992
											},
											mobile: {
												cropUrl: item.image.cropUrls.landscape,
												width: 600
											}
										}
									}
									alt={item.image.name}
								/>} */}
								{item.title && <p className="media-module-item-list-title">{item.title}</p>}
								{item.fileType && <p className="media-module-item-list-file">{item.fileType} ({item.fileSize})</p>}
								{item.link.url && <a className="cta" href={item.link.url}>{item.link.linkText}</a>}
							</li>
						))
					}
				</ul>
				{/* <Pagination
					{...mediaPagination}
					currentNumber={currentPageNumber}
					updateCurrentNumberHandler={updateCurrentNumberHandler}
					nextPrevHandler={nextPrevHandler}
				/> */}
			</Cell>
		</GridX>
	</div>
);

export default MediaModuleItem;