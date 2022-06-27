import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { StickyContainer } from 'react-sticky';
import { useSystemContext } from '../../../../Core/Contexts';
import HeaderNavigationStandard from '../../Components/Global/HeaderNavigation';
import Header from '../../Components/Global/HeaderItem';
import Footer from '../../Components/Global/FooterItem';
import { GridX, Cell, GridContainer } from '../../../../Helpers/JS/Foundation';
import './job-content-page.scss';


const JobContentPage = ({
	match
}) => {
	const [{ appData, pageData }] = useSystemContext();
	const styles = {
		backgroundColor: pageData.primaryColour
	};

	// Get language from appData to set the default language for the form.
	// Form currently supports fr, de, nl_NL and en_US. Defaults to en_US.
	// TODO: Add mapping for additional languages when/if they are added.
	const languagesMap = {
		de: 'de',
		en: 'en_US',
		fr: 'fr',
		nl: 'nl_NL'
	};
	const language = languagesMap[appData.language] || languagesMap['en'];

	useEffect(() => {
		const connexysScript = 'https://resourcemanager-156be04f125.secure.force.com/resource/cxsrec__cxsForm';

		const promise = new Promise((resolve, reject) => {
      
			// Add Connexys script file to document head if not added already.
      if (!document.getElementById('connexys-script')) {
        const script = document.createElement('script');
        document.head.appendChild(script);
        script.onload = resolve;
        script.onerror = reject;
        script.async = true;
        script.src = connexysScript;
        script.id = 'connexys-script';
      } else {
        resolve();
      }
		});

		promise.then(() => {
			const form = window.cxsForm || null;

			if (form) {
				form.init({
					target: '#cxsFormHolder',
					server: 'https://resourcemanager-156be04f125.secure.force.com/',
					jobId: match.params.JobId,
					language,
					placeholders: true
				});
			}
		});
	}, []);

	return (
		<div className={`page-bg-colour-wrapper ${pageData.documentTypeToCssClass}`} style={styles}>
			<HeaderNavigationStandard />
			<Header />
			<StickyContainer>
				<GridContainer>
					<GridX>
						<Cell className="small-24 large-12 large-offset-12">
							<form id="cxsFormHolder" className="cxs-form" />
						</Cell>
					</GridX>
				</GridContainer>
				<Footer />
			</StickyContainer>
		</div>
	);
}

export default withRouter(JobContentPage);
