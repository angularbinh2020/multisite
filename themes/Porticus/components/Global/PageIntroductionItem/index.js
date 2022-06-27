import React from 'react';
import PageIntroductionStandard from './PageIntroductionStandard';

const SelectedLayout = (props) => {
	switch (props.layout) {

	default:
		return <PageIntroductionStandard {...props} />;
	}
};

export default SelectedLayout;
