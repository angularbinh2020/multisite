import React from 'react';
import './TabItemStandard.scss';
import { GridX, Cell } from '../../../../../../Helpers/JS/Foundation';
import LinkItem from '../../../../../../Lego/Linking/LinkItem';

import reactHtmlParser from 'react-html-parser';

const TabItemStandard = ({
	itemClasses,
	title,
	subtitle,
	link,
	text,
	image,
	imageCaption,
	statisticItems,
	isOpen,
	bgImage,
	gaEvent,
	layout,
	documentTypeAlias
}) => {
	return (
		<div
			className={itemClasses + (isOpen ? ' open' : ' closed')}
			data-component-category={gaEvent && gaEvent.componentCategory}
			data-component-layout={layout}
			data-component-doc-type-alias={documentTypeAlias}
		>
			<GridX className="grid-padding-x">
				<Cell className="small-24">
					<div className="tab-item-image">
						{image && <img src={image.cropUrls.letterbox} alt={image.name} />}

						{(imageCaption && imageCaption.length > 0) &&
							<div style={bgImage}>
								<span>{reactHtmlParser(imageCaption)}</span>
							</div>
						}
					</div>
				</Cell>

				<Cell className="small-24 large-10">
					{subtitle && <h3 className="tab-item-subtitle">{subtitle}</h3>}
				</Cell>

				<Cell className="small-24 large-12 large-offset-2">
					{reactHtmlParser(text)}

					{link &&
						<LinkItem
							classes={'cta'}
							url={link.url}
							label={link.linkText}
						/>
					}
				</Cell>
			</GridX>
		</div>
	);
}



export default TabItemStandard;