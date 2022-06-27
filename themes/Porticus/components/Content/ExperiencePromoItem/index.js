import React from 'react';
import ExperiencePromoItem from './ExperiencePromoItemStandard';

const SelectedLayout = (props) => {
	switch (props.layout) {

	default:
		return <ExperiencePromoItem {...props} />;
	}
};

export default SelectedLayout;
