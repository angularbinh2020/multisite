import React from 'react';
import DefaultComponent from './AnchorLinksModuleStandard';
import WrapperComponent from './AnchorLinksModuleStandardWrapper';
import StickyItem from '../../../Global/StickyItem'
import UseAnimation from '../../../../../../Legacy/Helpers/JS/UseAnimation'
import useBackgroundColour from '../../../../Hooks/useBackgroundColour.js';
import useCmsProps from '../../../../Hooks/useCmsProps.js';

const DefinedComponent = (props) => {
	const bgColourProps = useBackgroundColour(props);
	const cmsProps = useCmsProps(props);

	const passedProps = {
		itemClasses:props.itemClasses,
		anchorLinks:props.anchorLinks,
		layout:props.layout,
		documentTypeAlias:props.documentTypeAlias,
		...cmsProps
	};

	const animationSettings = {
		animationClass: 'fade-up',
		buffer: 0.8
	}

	if (props.isRoot) {
		const wrapperClasses = 'component-wrapper';

		return (
			<WrapperComponent wrapperClasses={wrapperClasses} alias={props.alias} {...bgColourProps}>
				<StickyItem snapTo='header-navigation'>
						<DefaultComponent {...passedProps} />
				</StickyItem>
			</WrapperComponent>
		);
	}

	return (
		<StickyItem snapTo='header-navigation'>
			<UseAnimation animationSettings={animationSettings}>
				<DefaultComponent {...passedProps} />
			</UseAnimation>
		</StickyItem>)
};

export default DefinedComponent;
