import React, {useEffect, useState} from 'react';
import Template from './HomeLandingPage';
import { useSystemContext } from '../../../../Core/Contexts';
import { Tween } from 'react-gsap';

import './home-landing-page.scss'

const DefinedTemplate = () => {
	const [{ pageData }] = useSystemContext();
	const [{ panelExperience }, dispatchPanelExperience] = useSystemContext();
	const [widthDimension, setWidthDimension] = useState(0);
	const [noscrollClass, setNoscrollClass] = useState('noscroll');


	const styles = {
		backgroundColor: pageData.primaryColour
	};

	useEffect(() => {
		handleResize()
	}, []);

	useEffect(() => {
		panelExperience.isPanelExperience = true 
		dispatchPanelExperience({
			type: 'SET_PANEL_EXPERIENCE',
			data: panelExperience
		});

		setTimeout(() => {
			setNoscrollClass('')
		}, 1500)

	}, [])

	const handleResize = () => {
		const widthDimension = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		const mobileCheck = widthDimension < 992 ? true : false
		setWidthDimension(widthDimension)
	}

	return (
		<div className={`home-landing-page ${noscrollClass}`}>
			{widthDimension && (
				<div>
					<Tween 
						from={{ left: -100, rotation: 5 }} 
						to={{ left: -(widthDimension + 200), rotation: 0, display: 'none'}} 
						delay={1.5} 
						duration={1.25} 
					>
						<div className="on-load-swipe"></div>
					</Tween>

					<Template
						styles={styles}
						cmsClassName={pageData.documentTypeToCssClass}
						onLoadSwipeStart = {panelExperience.onLoadSwipeStart}
						onLoadSwipeComplete = {panelExperience.onLoadSwipeComplete}
					/>
				</div>
			)}
		</div>
	);
};

export default DefinedTemplate;