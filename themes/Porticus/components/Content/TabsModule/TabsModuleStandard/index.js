import React, { useState } from 'react';
import DefaultComponent from './TabsModuleStandard';
import WrapperComponent from './TabsModuleStandardWrapper';
import UseAnimation from '../../../../../../Legacy/Helpers/JS/UseAnimation'
import useBackgroundColour from '../../../../Hooks/useBackgroundColour.js';
import useCmsProps from '../../../../Hooks/useCmsProps.js';

const DefinedComponent = (props) => {
	const bgColourProps = useBackgroundColour(props);
	const cmsProps = useCmsProps(props);
	const [currentTab, setCurrentTab] = useState(0);

	const handleClick = (e) => {
		const selectedTab = Number(e.currentTarget.dataset.id);

		setCurrentTab(selectedTab);
	};

	const passedProps = {
		isOpen: currentTab,
		itemClasses: props.itemClasses,
		handleClick: handleClick,
		tabItems: props.tabItems,
		title: props.title,
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
				<UseAnimation animationSettings={animationSettings}>
					<DefaultComponent {...passedProps} />
				</UseAnimation>
			</WrapperComponent>
		);
	}

	return <DefaultComponent {...passedProps} />;

};

export default DefinedComponent;