import React from 'react';
import { useSystemContext } from '../../../../../../Core/Contexts';

import DefaultComponent from './HeaderItemSecondaryImage';
import WrapperComponent from './HeaderItemSecondaryImageWrapper';

const DefinedComponent = () => {
	const [{ pageData }] = useSystemContext();

	const styles = {
		backgroundColor: pageData.headerBackgroundColour
	};

	const passedProps = {
		itemClasses: pageData.header.itemClasses,
		title: pageData.header.title,
		image: pageData.header.image,
		secondaryImage: pageData.header.secondaryImage,
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

	return <DefaultComponent {...passedProps} styles={styles} />;

};

export default DefinedComponent;