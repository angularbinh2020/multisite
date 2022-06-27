import React from 'react';
import Primary from '../../../Global/HeaderNavigation/HeaderNavigationStandard/Primary'
import Slider from 'react-slick';
import ContentPicker from '../../../../../../Core/ContentPicker';
import { GridContainer } from '../../../../../../Helpers/JS/Foundation';

import '../../../../Styles/slick/slick.scss';
import './PanelExperienceStandard.scss'

const PanelExperienceStandard = ({
	itemClasses,
	items,
	getSlider,
	highlightedNavigation,
	panelExperience, 
	primaryNavigation,
	setReadyForAction,
	settings,
	directionSlide,
	updateNumber,
	wheelReact,
	documentTypeAlias,
	gaEvent,
	layout
}) => {
	return (
		<React.Fragment>

			<div 
				className={`${itemClasses} ${panelExperience.isPanelExperience ? 'desktop' : ''} ${directionSlide}`}
				{...wheelReact.events}
				data-component-category={gaEvent && gaEvent.componentCategory}
				data-component-layout={layout}
				data-component-doc-type-alias={documentTypeAlias}
			>
				<Slider ref={(e) => getSlider(e)}
					{...settings}
					beforeChange={(current, next) => updateNumber(current, next)}
					afterChange={() => {
						setReadyForAction()
					}}
					>
					{items &&
						items.map((item, i) => (
							<ContentPicker content={item} key={i}/>
						))
					}
				<div className={`${itemClasses} menu-slide`}>
					<GridContainer>
						<Primary
							highlightedNavigation={highlightedNavigation}
							primaryNavigation={primaryNavigation}
						/>
					</GridContainer>
					</div>
				</Slider>
			</div>

			<div 
				className={`${itemClasses} ${!panelExperience.isPanelExperience ? 'mobile' : ''}`} 
				{...wheelReact.events}
			>
				{items &&
					items.map((item, i) => (
						<ContentPicker content={item} key={i}/>
					))
				}
			</div>
		</React.Fragment>	
	)
}

export default PanelExperienceStandard;