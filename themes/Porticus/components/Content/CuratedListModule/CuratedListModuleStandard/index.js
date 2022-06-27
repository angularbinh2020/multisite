import React, { useState, useEffect } from 'react';
import DefaultComponent from './CuratedListModuleStandard';
import WrapperComponent from './CuratedListModuleStandardWrapper';
import modifier from '../../../../../../Helpers/JS/ListComponentDataModifier';
import useBackgroundColour from '../../../../Hooks/useBackgroundColour.js';
import useCmsProps from '../../../../Hooks/useCmsProps.js';

const DefinedComponent = (props) => {
	const bgColourProps = useBackgroundColour(props);
	const cmsProps = useCmsProps(props);
	const [listifiedData, setListifiedData] = useState(null);

	useEffect(() => {
		setListifiedData(modifier.listify(props, null, 'BuilderListing'));
	}, [props]);

	if (!listifiedData) {
		return (<React.Fragment></React.Fragment>);
	}

	const passedProps = {
		animationSettings: {
			animationClass: 'fade-up',
			buffer: 0.8
		},
		itemClasses: props.itemClasses,
		childItemClasses: props.childItemClasses,
		childLayout: props.childLayout,
		gaEvent: props.gaEvent,
		layout: props.layout,
		noContentBg: props.noContentBg,
		overrideParent: props.overrideParent,
		overspillClasses: props.overspillClasses,
		title: props.title,
		link: props.link,
		content: listifiedData,
		childCellClasses: props.childLayout === 'GridView' ? 'small-12 large-6' : 'small-24',
		...cmsProps
	};

	if (props.isRoot) {
		const wrapperClasses = 'component-wrapper';

		return (
			<WrapperComponent wrapperClasses={wrapperClasses} alias={props.alias} {...bgColourProps}>
				<DefaultComponent {...passedProps} />
			</WrapperComponent>
		);
	}

	return <DefaultComponent {...passedProps} />;
}

export default DefinedComponent