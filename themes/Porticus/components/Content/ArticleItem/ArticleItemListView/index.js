import React from 'react';
import DefaultComponent from './ArticleItemListView';
import WrapperComponent from './ArticleItemListViewWrapper';
import UseAnimation from '../../../../../../Legacy/Helpers/JS/UseAnimation'
import useCmsProps from '../../../../Hooks/useCmsProps.js';

const DefinedComponent = (props) => {
	const cmsProps = useCmsProps(props);

	cmsProps.itemClasses = props.isAutoList ? `${props.itemClasses} list-view`: props.itemClasses;

	const passedProps = {
		title: props.title,
		image: props.image,
		url: props.url,
		...cmsProps
	};

	const animationSettings = {
		animationClass: 'fade-up',
		buffer: 0.8
	}

	if (props.isRoot) {
		return (
			<WrapperComponent alias={props.alias}>
				<UseAnimation animationSettings={animationSettings}>
					<DefaultComponent {...passedProps} />
				</UseAnimation>
			</WrapperComponent>
		);
	}

	return (
		<UseAnimation animationSettings={animationSettings}>
			<DefaultComponent {...passedProps} />
		</UseAnimation>
	);

};

export default DefinedComponent;