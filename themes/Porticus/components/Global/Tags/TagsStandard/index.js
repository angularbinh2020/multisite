import React from 'react';
import { useSystemContext } from '../../../../../../Core/Contexts';
import UseAnimation from '../../../../../../Legacy/Helpers/JS/UseAnimation'

import DefaultComponent from './TagsStandard';

const DefinedComponent = () => {
	const [{ pageData }] = useSystemContext();

	const passedProps = {
		relatedHubsTitle:pageData.relatedHubsTitle,
		relatedHubs:pageData.relatedHubs,
		relatedPrioritiesTitle:pageData.relatedPrioritiesTitle,
		relatedPriorities:pageData.relatedPriorities
	};

	const animationSettings = {
		animationClass: 'fade-up',
		buffer: 0.8
	}

	return (
		<UseAnimation animationSettings={animationSettings}>
			<DefaultComponent {...passedProps} />
		</UseAnimation>
	);

};

export default DefinedComponent;
