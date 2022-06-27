import React from 'react';
import HeaderItemStandard from './HeaderItemStandard';
import HeaderItemLanding from './HeaderItemLanding';
import HeaderItemSquare from './HeaderItemSquare';
import HeaderItemSecondaryImage from './HeaderItemSecondaryImage';
import HeaderItemShape from './HeaderItemShape';
import  {useSystemContext} from '../../../../../Core/Contexts';

const SelectedLayout = (props) => {
	const [{ pageData }] = useSystemContext();

	switch (pageData.header.layout) {
		case 'Landing':
			return <HeaderItemLanding {...props}/>;

		case 'Square':
			return <HeaderItemSquare {...props}/>;

		case 'SecondaryImage':
			return <HeaderItemSecondaryImage {...props}/>;

		case 'Shape':
			return <HeaderItemShape {...props}/>;

		default:
			return <HeaderItemStandard {...props}/>;
	}
};

export default SelectedLayout;