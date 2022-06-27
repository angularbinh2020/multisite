import React from 'react';
import ExperienceBannerItem from './ExperienceBannerItemStandard';

const SelectedLayout = (props) => {
	switch (props.layout) {

	default:
		return <ExperienceBannerItem {...props} />;
	}
};

export default SelectedLayout;
