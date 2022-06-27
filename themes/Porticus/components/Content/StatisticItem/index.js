import React from 'react';
import StatisticItemStandard from './StatisticItemStandard';

const SelectedLayout = (props) => {
	switch (props.layout) {

	default:
		return <StatisticItemStandard {...props} />;
	}
};

export default SelectedLayout;
