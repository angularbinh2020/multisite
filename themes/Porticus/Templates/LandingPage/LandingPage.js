import React from 'react';
import HeaderNavigationStandard from '../../Components/Global/HeaderNavigation';
import Header from '../../Components/Global/HeaderItem';
import Footer from '../../Components/Global/FooterItem';
import PageIntroductionItem from '../../Components/Global/PageIntroductionItem';
import { StickyContainer } from 'react-sticky';

import EmbeddedContent from '../../../../Core/EmbeddedContent';

const LandingPage = ({
	styles,
	cmsClassName
}) => {
	return (
		<div className={`page-bg-colour-wrapper ${cmsClassName}`} style={styles}>
		 	<HeaderNavigationStandard />
			<Header />
			<StickyContainer>
				<PageIntroductionItem />
				<EmbeddedContent isEntryPoint={true} />
				<Footer />
			</StickyContainer>
		</div>
	);
};

export default LandingPage;
