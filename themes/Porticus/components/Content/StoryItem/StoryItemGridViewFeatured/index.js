import React from 'react';
import DefaultComponent from './StoryItemGridViewFeatured';
import WrapperComponent from './StoryItemGridViewFeaturedWrapper';
import useCmsProps from '../../../../Hooks/useCmsProps.js';

const DefinedComponent = (props) => {
	const cmsProps = useCmsProps(props);

	cmsProps.itemClasses = (props.isAutoList ? `${props.itemClasses} grid-view`: props.itemClasses) + ' featured';

	const passedProps = {
		summaryText:props.summaryText,
		title:props.title,
		url:props.url,
		image:props.image,
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