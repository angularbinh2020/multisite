import React from 'react';
import IframeItemStandard from './IframeItemStandard';

const SelectedLayout = (props) => {

	switch (props.layout) {

		default:
			return <IframeItemStandard {...props}/>;
	}
};

export default SelectedLayout;
