import React from 'react';
import HeaderNavigationStandard from '../../Components/Global/HeaderNavigation';
import Header from '../../Components/Global/HeaderItem';
import Footer from '../../Components/Global/FooterItem';
import BreadCrumbs from '../../Components/Template/Breadcrumbs';
import EmbeddedContent from '../../../../Core/EmbeddedContent';
import Tags from '../../../Porticus/Components/Global/Tags';
import PageIntroductionItem from '../../../Porticus/Components/Global/PageIntroductionItem';
import { StickyContainer } from 'react-sticky';

import { GridX, Cell, GridContainer } from '../../../../Helpers/JS/Foundation';

const Article = ({
	styles,
	cmsClassName
 }) => {
	return (
		<div className={`page-bg-colour-wrapper ${cmsClassName}`} style={styles}>
			<HeaderNavigationStandard />
			<BreadCrumbs />
			<Header />
			<StickyContainer>
				<GridContainer>
					<GridX className="grid-padding-x">
						<Cell className="small-24 large-8">
							<Tags />
						</Cell>

						<Cell className="small-24 large-12 large-offset-4">
							<PageIntroductionItem />
						</Cell>
					</GridX>
				</GridContainer>
				<EmbeddedContent isEntryPoint={true} />
				<Footer />
			</StickyContainer>
		</div>
	);
};

export default Article;
