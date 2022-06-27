import React from 'react';
import DefaultComponent from './QuoteItemPortraitImage';
import WrapperComponent from './QuoteItemPortraitImageWrapper';
import UseAnimation from '../../../../../../Legacy/Helpers/JS/UseAnimation'
import useBackgroundColour from '../../../../Hooks/useBackgroundColour.js';
import useCmsProps from '../../../../Hooks/useCmsProps.js'; 

const DefinedComponent = (props) => {
	const bgColourProps = useBackgroundColour(props);
	const cmsProps = useCmsProps(props);

	const passedProps = {
		itemClasses:props.itemClasses,
		authorName:props.authorName,
		authorTitle:props.authorTitle,
		mediaItem:props.mediaItem,
		quote:props.quote,
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