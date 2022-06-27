import React from 'react';
import PairedImagesItemStandard from './PairedImagesItemStandard';

const SelectedLayout = (props) => {
	switch (props.layout) {

	default:
		return <PairedImagesItemStandard {...props} />;
	}
};

export default SelectedLayout;
