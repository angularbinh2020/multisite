import React from 'react';
import HeaderNavigationStandard from '../../Components/Global/HeaderNavigation';
import Header from '../../Components/Global/HeaderItem';
import Footer from '../../Components/Global/FooterItem';
import { StickyContainer } from 'react-sticky';
import Filter from '../../Components/Template/Filter';

import EmbeddedContent from '../../../../Core/EmbeddedContent';

const ListingPage = ({
	styles,
	cmsClassName
 }) => {
	return (
		<div className={`page-bg-colour-wrapper ${cmsClassName}`} style={styles}>
			<HeaderNavigationStandard />
			<Header />
			<StickyContainer>
				<Filter />
				<EmbeddedContent isEntryPoint={true} />
				<Footer />
			</StickyContainer>
		</div>
	);
};

export default ListingPage;
