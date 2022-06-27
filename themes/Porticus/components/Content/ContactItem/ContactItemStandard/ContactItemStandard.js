import React from 'react';
import reactHtmlParser from 'react-html-parser';
import './ContactItemStandard.scss'
import { GridX, Cell, GridContainer } from '../../../../../../Helpers/JS/Foundation';

const ContactItemStandard = ({
	itemClasses,
	address,
	companyRegistrationDetails,
	description,
	emailAddress,
	fax,
	image,
	imageCaption,
	telephone,
	title,
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
					<Cell className="small-24 large-10 large-offset-2 contact-item-img-cell">
						{image && (
							<img src={image.cropUrls.landscape} alt={imageCaption} />
						)}
					</Cell>

					<Cell className="small-24 large-12 contact-item-content-cell">
						<h3 className="contact-item-title">{title}</h3>
						{address && <p>{reactHtmlParser(address)}</p>}
						{emailAddress && <p>Email: <a className="cta" href={'mailto:' + emailAddress}>{emailAddress}</a></p>}
						{telephone && <p>Telephone: {telephone}</p>}
						{fax && <p>Fax number: {fax}</p>}
						{companyRegistrationDetails && <p>Company registration details: {companyRegistrationDetails}</p>}
						{description && reactHtmlParser(description)}
					</Cell>
				</GridX>
			</GridContainer>
		</div>
	);
}


export default ContactItemStandard;