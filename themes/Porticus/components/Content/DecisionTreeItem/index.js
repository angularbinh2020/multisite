import React from 'react';
import DecisionTreeItem from './DecisionTreeItemStandard';

const SelectedLayout = (props) => {
	switch (props.layout) {

	default:
		return <DecisionTreeItem {...props} />;
	}
};

export default SelectedLayout;
