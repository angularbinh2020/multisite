import React from 'react';
import HeaderItemStandard from './HeaderItemStandard';
import  {useSystemContext} from '../../../../../Core/Contexts';

const SelectedLayout = (props) => {
	const [{ pageData }] = useSystemContext();

	switch (pageData.header.layout) {
		default:
			return <HeaderItemStandard {...props}/>;
	}
};

export default SelectedLayout;