import React from 'react';
import ImageItemStandard from './ImageItemStandard';

const SelectedLayout = (props) => {

	switch (props.layout) {

		default:
			return <ImageItemStandard {...props}/>;
	}
};

export default SelectedLayout;
