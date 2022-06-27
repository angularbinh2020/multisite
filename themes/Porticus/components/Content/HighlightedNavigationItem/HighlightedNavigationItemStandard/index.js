import React from 'react';
import DefaultComponent from './HighlightedNavigationItemStandard';
import WrapperComponent from './HighlightedNavigationItemStandardWrapper';
import useCmsProps from '../../../../Hooks/useCmsProps.js';

const DefinedComponent = (props) => {
	const cmsProps = useCmsProps(props);

	const passedProps = {
		itemClasses: props.itemClasses,
		icon: props.icon,
		link: props.link,
		...cmsProps
	};

	if(props.isRoot) {
		return (
			<WrapperComponent alias={props.alias}>
				<DefaultComponent {...passedProps} />
			</WrapperComponent>
		);
	}

	return <DefaultComponent {...passedProps} />;
};

export default DefinedComponent;