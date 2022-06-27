import React from 'react';
import Template from './ApplicationContentPage';
import { useSystemContext } from '../../../../Core/Contexts';

const DefinedTemplate = () => {
	const [{ pageData }] = useSystemContext();

	const styles = {
		backgroundColor: pageData.primaryColour
	};

	return (
		<Template
			styles={styles}
			cmsClassName={pageData.documentTypeToCssClass}
		 />
	);
};

export default DefinedTemplate;