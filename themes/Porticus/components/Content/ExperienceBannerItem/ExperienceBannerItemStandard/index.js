import React, { useState, useEffect } from 'react';
import DefaultComponent from './ExperienceBannerItemStandard';
import WrapperComponent from './ExperienceBannerItemStandardWrapper';
import useCmsProps from '../../../../Hooks/useCmsProps.js';

const DefinedComponent = (props) => {
	const cmsProps = useCmsProps(props);
	const [pairedImage, setPairedImages] = useState()

	useEffect(() => {

		if(props.pairedImages){
			const selectPairedImages = Math.floor(Math.random() * props.pairedImages.length)
			setPairedImages(props.pairedImages[selectPairedImages])
		}
	}, [])

	const passedProps = {
		itemClasses: props.itemClasses,
		description: props.description,
		pairedImage: pairedImage,
		title: props.title,
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