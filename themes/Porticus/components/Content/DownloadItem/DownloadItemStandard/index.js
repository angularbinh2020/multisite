import React from 'react';
import DefaultComponent from './DownloadItemStandard';
import WrapperComponent from './DownloadItemStandardWrapper';
import useCmsProps from '../../../../Hooks/useCmsProps.js';

const DefinedComponent = (props) => {
	const cmsProps = useCmsProps(props);

	const passedProps = {
		itemClasses:props.itemClasses,
		downloadFile:props.downloadFile,
		...cmsProps
	};

	if(props.isRoot) {
		return (
			<WrapperComponent alias={props.alias}>
				<DefaultComponent {...passedProps} />
			</WrapperComponent>
		);
	}

	return <DefaultComponent {...passedProps} />;

};

export default DefinedComponent;