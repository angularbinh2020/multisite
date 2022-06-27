import React from 'react';
import { useSystemContext } from '../../../../../../Core/Contexts';
import DefaultComponent from './HeaderItemLanding';
import WrapperComponent from './HeaderItemLandingWrapper';

const DefinedComponent = () => {
	const [{ pageData }] = useSystemContext();

	const styles = {
		backgroundColor: pageData.headerBackgroundColour
	};

	const passedProps = {
		animationSettings: {
			animationClass: 'fade-up',
			buffer: 0.8
		},
		itemClasses: pageData.header.itemClasses,
		title: pageData.header.title,
		image: pageData.header.image,
		imageCaption: pageData.header.imageCaption,
		introductionText: pageData.header.introductionText
	};

	if (pageData.isRoot) {
		return (
			<WrapperComponent>
				<DefaultComponent {...passedProps} styles={styles} />
			</WrapperComponent>
		);
	}

	return (
		<DefaultComponent {...passedProps} styles={styles} />
	);

};

export default DefinedComponent;