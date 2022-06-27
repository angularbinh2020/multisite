import React from 'react';
import { useSystemContext } from '../../../../../../Core/Contexts';

import DefaultComponent from './HeaderItemStandard';
import WrapperComponent from './HeaderItemStandardWrapper';

const DefinedComponent = () => {
	const [{ pageData }] = useSystemContext();

	const styles = {
		backgroundColor: pageData.headerBackgroundColour
	};

	const passedProps = {
		itemClasses: pageData.header.itemClasses,
		title: pageData.header.title,
		image: pageData.header.image,
		imageCaption: pageData.header.imageCaption,
		images: pageData.header.images,
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