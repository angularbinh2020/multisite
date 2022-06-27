import React from 'react';
import DefaultComponent from './ContactItemStandard';
import WrapperComponent from './ContactItemStandardWrapper';
import useCmsProps from '../../../../Hooks/useCmsProps.js';

const DefinedComponent = (props) => {
	const cmsProps = useCmsProps(props);

	const passedProps = {
		itemClasses: props.itemClasses,
		address: props.address,
		companyRegistrationDetails: props.companyRegistrationDetails,		
		description: props.description,
		fax: props.fax,
		image: props.image,
		imageCaption: props.imageCaption,
		emailAddress: props.emailAddress,
		telephone: props.telephone,
		title: props.title,
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