import React from 'react';
import HeaderNavigationStandard from './HeaderNavigationStandard';
import { useSystemContext } from '../../../../../Core/Contexts';

const SelectedLayout = () => {

	const [{ pageData }] = useSystemContext();

	return (
		<React.Fragment>
			{pageData && <HeaderNavigationStandard />}
		</React.Fragment>
	);

};

export default SelectedLayout;