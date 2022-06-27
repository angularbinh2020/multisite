import React from 'react';
import DefaultComponent from './ArticleItemStandard';
import WrapperComponent from './ArticleItemStandardWrapper';
import useCmsProps from '../../../../Hooks/useCmsProps.js';

const DefinedComponent = (props) => {
	const cmsProps = useCmsProps(props);

	const passedProps = {
		itemClasses:props.itemClasses,
		image:props.image,
		title:props.title,
		publicationDate:props.publicationDate,
		url:props.url,
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