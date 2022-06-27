import React from 'react';
import TableItemStandard from './TableItemStandard';

const SelectedLayout = (props) => {

	switch (props.layout) {

		default:
			return <TableItemStandard {...props}/>;
	}
};

export default SelectedLayout;
