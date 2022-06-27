import React from 'react';
import { useSystemContext } from '../../../../../../Core/Contexts';

import DefaultComponent from './FooterItemStandard';

const DefinedComponent = () => {
	const [{ globalData }] = useSystemContext();

	const passedProps = {
		address: globalData.footer.footerAddress,
		ancillaryLinks: globalData.footer.footerAncillaryLinks,
		defaultPageUrl: globalData.defaultPage.url,
		logo: globalData.footer.footerLogo,
		navigationLinks: globalData.footer.footerNavigationLinks,
		navigationLinks2: globalData.footer.footerNavigationLinks2,
		navigationTitle: globalData.footer.footerNavigationTitle,
		navigationTitle2: globalData.footer.footerNavigationTitle2,
		footerSocialAccounts: globalData.footer.footerSocialAccounts,
	};

	return <DefaultComponent {...passedProps} />;

};

export default DefinedComponent;