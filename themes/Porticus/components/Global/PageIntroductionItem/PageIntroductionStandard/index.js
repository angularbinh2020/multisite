import React from 'react';
import { useSystemContext } from '../../../../../../Core/Contexts';
import DefaultComponent from './PageIntroductionStandard';
import WrapperComponent from './PageIntroductionStandardWrapper';
import UseAnimation from '../../../../../../Legacy/Helpers/JS/UseAnimation'


const DefinedComponent = () => {
	const [{ pageData }] = useSystemContext();

	const passedProps = {
		// itemClasses: pageData.pageIntroduction.itemClasses, NEED TO FIND
		pageIntroduction: pageData.pageIntroduction
	};

	const animationSettings = {
		animationClass: 'fade-up',
		buffer: 0.8
	}

	if (pageData.isRoot) {
		const wrapperClasses = 'section-wrapper ' + 'NEED TO FIND';

		return (
			<WrapperComponent wrapperClasses={wrapperClasses}>
				<DefaultComponent {...passedProps} />
			</WrapperComponent>
		);
	}

	return (
		<UseAnimation animationSettings={animationSettings}>
			<DefaultComponent {...passedProps} />
		</UseAnimation>
	);
};

export default DefinedComponent;