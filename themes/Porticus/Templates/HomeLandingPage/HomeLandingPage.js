import React from 'react';
import EmbeddedContent from '../../../../Core/EmbeddedContent';
import HeaderNavigationStandard from '../../Components/Global/HeaderNavigation';
import Header from '../../Components/Global/HomepageHeaderItem';
import Footer from '../../Components/Global/FooterItem';

const HomeLandingPage = ({
	cmsClassName,
	onLoadSwipeStart,
	onLoadSwipeComplete,
	styles
}) => {
	return (
		<React.Fragment>
			<div className={`page-bg-colour-wrapper ${onLoadSwipeStart ? "on-load-swipe-started" : ''} ${onLoadSwipeComplete ? "on-load-swipe-complete" : ''}`} style={styles}>
				<HeaderNavigationStandard />
				<Header />
				<div className={`page-bg-colour-wrapper ${cmsClassName}`} style={styles}>
					<EmbeddedContent isEntryPoint={true} />
				</div>
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default HomeLandingPage;