import React from 'react';
import './CarouselItemStandard.scss';
import { GridX, Cell, GridContainer } from '../../../../../../Helpers/JS/Foundation';
import LinkItem from '../../../../../../Lego/Linking/LinkItem';
import reactHtmlParser from 'react-html-parser';

const CarouselItemStandard = ({
	itemClasses,
	title,
	image,
	imageCaption,
	link,
	text,
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
					<Cell className="small-24 large-12">
						{title && (
							<h3 className="carousel-item-title">
								{link ? <LinkItem url={link.url} label={title} /> : title}
							</h3>
						)}
					</Cell>

					<Cell className="small-24 large-10">
						{text && <div className="carousel-item-text">{reactHtmlParser(text)}</div>}

						{link &&
							<LinkItem
								classes={'cta'}
								url={link.url}
								label={link.linkText}
							/>
						}
					</Cell>

					<img className="carousel-item-image" src={image.url} alt={image.name} />
				</GridX>
			</GridContainer>
		</div>
	);
}

export default CarouselItemStandard;