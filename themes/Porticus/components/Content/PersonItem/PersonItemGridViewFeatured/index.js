import React from 'react';
import DefaultComponent from './PersonItemGridViewFeatured';
import WrapperComponent from './PersonItemGridViewFeaturedWrapper';
import useCmsProps from '../../../../Hooks/useCmsProps.js';

const DefinedComponent = (props) => {
	const cmsProps = useCmsProps(props);

	cmsProps.itemClasses = (props.isAutoList ? `${props.itemClasses} grid-view`: props.itemClasses) + ' featured';

	const passedProps = {
		name: props.name,
		jobTitle: props.jobTitle,
		biography: props.biography,
		image: props.image,
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

	return <DefaultComponent {...passedProps} />

}

export default DefinedComponent