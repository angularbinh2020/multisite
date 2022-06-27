import React from 'react';
import HeaderNavigationStandard from '../../Components/Global/HeaderNavigation';
import BreadCrumbs from '../../Components/Template/Breadcrumbs';
import Header from '../../Components/Global/HeaderItem';
import Footer from '../../Components/Global/FooterItem';
import { StickyContainer } from 'react-sticky';

import EmbeddedContent from '../../../../Core/EmbeddedContent';

const HubContentPage = ({
	styles,
	cmsClassName
 }) => {
	return (
		<div className={`page-bg-colour-wrapper ${cmsClassName}`} style={styles}>
			<HeaderNavigationStandard />
			<BreadCrumbs />
			<Header />
			<StickyContainer>
				<EmbeddedContent isEntryPoint={true} />
				<Footer />
			</StickyContainer>
		</div>
	);
};

export default HubContentPage;
