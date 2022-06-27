import React from 'react';
import HeaderNavigationStandard from '../../Components/Global/HeaderNavigation';
import Header from '../../Components/Global/HeaderItem';
import Footer from '../../Components/Global/FooterItem';
import { StickyContainer } from 'react-sticky';
import DecisionOptions from '../../Components/Template/DecisionOptions';

import EmbeddedContent from '../../../../Core/EmbeddedContent';

const ApplicationContentPage = ({
	styles,
	cmsClassName
 }) => {
	return (
		<div className={`page-bg-colour-wrapper ${cmsClassName}`} style={styles}>
			<HeaderNavigationStandard />
			<Header />
			<StickyContainer>
				<EmbeddedContent isEntryPoint={true} />
				<DecisionOptions />
				<Footer />
			</StickyContainer>
		</div>
	);
};

export default ApplicationContentPage;
