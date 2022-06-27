import React, { useEffect, useState } from 'react';
import DefaultComponent from './Breadcrumbs';
import { useSystemContext } from '../../../../../Core/Contexts';

const DefinedComponent = () => {
	const [{ pageData }] = useSystemContext();

	const passedProps = {
		animationSettings: {
			animationClass: 'fade-up',
			buffer: 0.8
		},
		breadcrumbs: pageData.breadcrumb,
	};

	return <DefaultComponent {...passedProps} />;

};

export default DefinedComponent;
