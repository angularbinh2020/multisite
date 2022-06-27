import React, { useState, useEffect } from 'react';
import DefaultComponent from './JobItemStandard';
import WrapperComponent from './JobItemStandardWrapper';
import useCmsProps from '../../../../Hooks/useCmsProps.js';

const DefinedComponent = (props) => {
	const cmsProps = useCmsProps(props);
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		if (props.activeItemId === props.index) {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
  	}, [props.activeItemId, props.index]);

	const passedProps = {
		accordionComponents: props.accordionComponents,
		additionalInformation: props.additionalInformation,
		additionalInformationTitle: props.additionalInformationTitle,
		alias: props.alias,
    	connexysId: props.connexysId,
		description: props.description,
		descriptionTitle: props.descriptionTitle,
		documentTypeAlias: props.documentTypeAlias,
		gaEvent: props.gaEvent,
		index: props.index,
		isActive: isActive,
		itemClasses: props.itemClasses,
		jobContentLink: props.jobContentLink,
		jobId: props.jobId,
		keyResponsibilities: props.keyResponsibilities,
		keyResponsibilitiesTitle: props.keyResponsibilitiesTitle,
		layout: props.layout,
		linkName : props.linkName,
		location: props.location,
		organisation: props.organisation,
		organisationTitle: props.organisationTitle,
		responsibilities: props.responsibilities,
		responsibilitiesTitle: props.responsibilitiesTitle,
		skillsTitle: props.skillsTitle,
		skills: props.skills,
		title: props.title,
		updateActiveItem: props.updateActiveItem,
		...cmsProps
	};

	if (props.isRoot) {
		return (
			<WrapperComponent alias={props.alias}>
				<DefaultComponent {...passedProps} />
			</WrapperComponent>
		);
	}

	return <DefaultComponent {...passedProps} />;
};

export default DefinedComponent;