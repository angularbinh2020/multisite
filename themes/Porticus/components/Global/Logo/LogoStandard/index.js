import React from 'react';
import { useSystemContext } from '../../../../../../Core/Contexts';

import DefaultComponent from './LogoStandard';

const DefinedComponent = (props) => {
	const [{ globalData }] = useSystemContext();

	const passedProps = {
		logo: globalData.logo
	};

	return <DefaultComponent {...passedProps} />;

};

export default DefinedComponent;