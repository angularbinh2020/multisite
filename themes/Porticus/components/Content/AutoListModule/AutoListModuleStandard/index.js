import React, { useState, useEffect } from 'react';
import { useSystemContext } from '../../../../../../Core/Contexts';
import DefaultComponent from './AutoListModuleStandard';
import WrapperComponent from './AutoListModuleStandardWrapper';
import fetchEndpoint from '../../../../../../Helpers/JS/FetchEndpoint';
import modifier from '../../../../../../Helpers/JS/ListComponentDataModifier';
import useBackgroundColour from '../../../../Hooks/useBackgroundColour.js'; 
import useCmsProps from '../../../../Hooks/useCmsProps.js';

const DefinedComponent = (props) => {
	const bgColourProps = useBackgroundColour(props);
	const cmsProps = useCmsProps(props);
	const [{appData}] = useSystemContext();
	const [{routesData}] = useSystemContext();
	const [fetchedData, setFetchedData] = useState(null);

	useEffect(() => {

		// *** value object to be consumed by fetchEndpoint service
		const vo = {
			path: routesData.endpoints.listingEndpointUrl,
			query: [
				{rootNodeId: appData.id},
				{tags: props.tags},
				{allowedDocumentTypeAliases: props.allowedDocumentTypeAliases},
				{highlightedItemId: props.highlightedItemId},
				{quantity: props.quantity},
			]
		};

		fetchEndpoint.call(vo).then((data) => {
			const listifiedData = {items: modifier.listify(props, data.items, 'BuilderListing')};
			setFetchedData(listifiedData); // *** child items
		});

	}, [routesData]);

	if (!fetchedData) {
		return (<React.Fragment></React.Fragment>);
	}

	const passedProps = {
		animationSettings: {
			animationClass: 'fade-up',
			buffer: 0.8
		},
		title: props.title,
		link: props.link,
		itemClasses: props.itemClasses,
		gaEvent: props.gaEvent,
		layout: props.layout,
		documentTypeAlias: props.documentTypeAlias,
		content: fetchedData,
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