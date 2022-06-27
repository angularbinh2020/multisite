import React from 'react';
import DownloadItemStandard from './DownloadItemStandard';

const SelectedLayout = (props) => {

	switch (props.layout) {

	default:
		return <DownloadItemStandard {...props}/>;
	}
};

export default SelectedLayout;