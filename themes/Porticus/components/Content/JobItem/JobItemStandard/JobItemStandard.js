import React, { useState, useEffect, useRef } from 'react';
import reactHtmlParser from 'react-html-parser';
import { Tween } from 'react-gsap';
import { scroller } from 'react-scroll';
import { GridX, Cell } from '../../../../../../Helpers/JS/Foundation';
import LinkItem from '../../../../../../Lego/Linking/LinkItem';
import './JobItemStandard.scss';

const JobItem = ({
	additionalInformation,
	additionalInformationTitle,
	connexysId,
	documentTypeAlias,
	gaEvent,
	description,
	descriptionTitle,
	index,
	isActive,
	itemClasses,
	jobContentLink,
	jobId,
	keyResponsibilities,
	keyResponsibilitiesTitle,
	layout,
	linkName,
	location,
	responsibilities,
	responsibilitiesTitle,
	skills,
	skillsTitle,
	organisation,
	organisationTitle,
	title,
	updateActiveItem
}) => {
	const jobRef = useRef(null);
		const [from, setFrom] = useState({ height: 0 });
		const [to, setTo] = useState({ height: 0 });
		const elementId = `job-${ jobId }`;
		const scrollSettings = {
		spy: true,
		smooth: true,
		duration: 500,
		offset: -80
	};

	useEffect(() => {
    	const height = jobRef.current.targets[0].scrollHeight;

		if (isActive) {
			setFrom({ height: 0 });
      		setTo({ height: height });

      		setTimeout(() => {
				scroller.scrollTo(elementId, scrollSettings);
			}, 500)
		} else {
			setFrom({ height: 'auto' });
			setTo({ height: 0 });
    	}
	}, [isActive]);

	return (
		<div
			className={itemClasses + (isActive ? ' active' : '')}
			data-component-category={gaEvent && gaEvent.componentCategory}
			data-component-layout={layout}
			data-component-doc-type-alias={documentTypeAlias}
      id={elementId}
		>
			<div className="job-item-title-container" onClick={updateActiveItem} data-id={index}>
				{title && <h3 className="job-item-title">{title} - <span>{location}</span></h3>}
				<i className="accordion-icon"></i>
			</div>
			<Tween
        from={from}
        to={to}
        duration={0.5}
        ref={jobRef}
      >
				<div className="job-item-content">
					<GridX>
						<Cell className="small-24 large-12 large-offset-12">
							{organisationTitle && organisation &&
								<React.Fragment>
									<h4 className="job-item-content-subtitles">{organisationTitle}</h4>
									{organisation.charAt(0) === '<' ?	reactHtmlParser(organisation) : <p>{reactHtmlParser(organisation)}</p>}
								</React.Fragment>
							}

							{descriptionTitle && description &&
								<React.Fragment>
									<h4 className="job-item-content-subtitles">{descriptionTitle}</h4>
									{description.charAt(0) === '<' ?	reactHtmlParser(description) : <p>{reactHtmlParser(description)}</p>}
								</React.Fragment>
							}

							{responsibilitiesTitle && responsibilities &&
								<React.Fragment>
									<h4 className="job-item-content-subtitles">{responsibilitiesTitle}</h4>
									{responsibilities.charAt(0) === '<' ?	reactHtmlParser(responsibilities) : <p>{reactHtmlParser(responsibilities)}</p>}
								</React.Fragment>
							}

							{keyResponsibilitiesTitle && keyResponsibilities &&
								<React.Fragment>
									<h4 className="job-item-content-subtitles">{keyResponsibilitiesTitle}</h4>
									{keyResponsibilities.charAt(0) === '<' ?	reactHtmlParser(keyResponsibilities) : <p>{reactHtmlParser(keyResponsibilities)}</p>}
								</React.Fragment>
							}

							{skillsTitle && skills &&
								<React.Fragment>
									<h4 className="job-item-content-subtitles">{skillsTitle}</h4>
									{skills.charAt(0) === '<' ?	reactHtmlParser(skills) : <p>{reactHtmlParser(skills)}</p>}
								</React.Fragment>
							}

							{additionalInformationTitle && additionalInformation &&
								<React.Fragment>
									<h4 className="job-item-content-subtitles">{additionalInformationTitle}</h4>
									{additionalInformation.charAt(0) === '<' ?	reactHtmlParser(additionalInformation) : <p>{reactHtmlParser(additionalInformation)}</p>}
								</React.Fragment>
							}

							{jobContentLink && <LinkItem
								classes={'cta job-item-content-apply-button'}
								url={`${jobContentLink.url.replace(':JobId', connexysId)}`}
								label={linkName}
							/>}
						</Cell>
					</GridX>
				</div>
			</Tween>
		</div>
	);
}

export default JobItem;
