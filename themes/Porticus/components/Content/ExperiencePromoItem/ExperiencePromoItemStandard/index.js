import React, {useState} from 'react';
import DefaultComponent from './ExperiencePromoItemStandard';
import WrapperComponent from './ExperiencePromoItemStandardWrapper';
import useCmsProps from '../../../../Hooks/useCmsProps.js';

const DefinedComponent = (props) => {
	const cmsProps = useCmsProps(props);
	const [hoverClass, setHoverClass] = useState();

	const triggerHoverClass = () => {
		setHoverClass(!hoverClass);
	};

	const passedProps = {
		itemClasses: props.itemClasses,
		title: props.title,
		description: props.description,
		icon1: props.icon1,
		icon2: props.icon2,
		link: props.link,
		hoverClass: hoverClass,
		triggerHoverClass: triggerHoverClass,
		...cmsProps
	};

	if (props.isRoot) {
		return (
			<WrapperComponent alias={props.alias}>
				<DefaultComponent {...passedProps} />
			</WrapperComponent>
		);
	}

	return <DefaultComponent {...passedProps} />;

};

export default DefinedComponent;