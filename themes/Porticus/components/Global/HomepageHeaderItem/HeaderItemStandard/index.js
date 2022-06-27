import React, {useEffect, useState} from 'react';
import { useSystemContext } from '../../../../../../Core/Contexts';

import DefaultComponent from './HeaderItemStandard';
import WrapperComponent from './HeaderItemStandardWrapper';

const DefinedComponent = () => {
	const [{ pageData }] = useSystemContext();
	const [headerImageItems, setHeaderImageItems] = useState([]);

	useEffect(() => {
		const headerImages = pageData.header.images;
		const isEven = headerImages.length % 2 === 0;
		const totalAvailableImages = isEven ? headerImages.length : headerImages.length - 1; 

		if(totalAvailableImages >= 2){
			const selectFirstImage = Math.floor(Math.random() * totalAvailableImages);
			const selectFirstOddImage = selectFirstImage % 2 === 0 ? selectFirstImage : selectFirstImage - 1
			setHeaderImageItems([
				headerImages[selectFirstOddImage], 
				headerImages[selectFirstOddImage + 1]
			]);
		}
	}, [pageData])

	const styles = {
		backgroundColor: pageData.headerBackgroundColour
	};

	const passedProps = {
		itemClasses: pageData.header.itemClasses,
		title: pageData.header.title,
		image: pageData.header.image,
		imageCaption: pageData.header.imageCaption,
		headerImageItems: headerImageItems,
		introductionText: pageData.header.introductionText
	};

	if (pageData.isRoot) {
		return (
			<WrapperComponent>
				<DefaultComponent {...passedProps} styles={styles} />
			</WrapperComponent>
		);
	}

	return <DefaultComponent {...passedProps} styles={styles} />;

};

export default DefinedComponent;