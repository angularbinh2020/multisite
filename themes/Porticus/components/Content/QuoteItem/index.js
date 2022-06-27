import React from 'react';
import QuoteItemStandard from './QuoteItemStandard';
import QuoteItemPortraitImage from './QuoteItemPortraitImage';
import QuoteItemLandscapeMedia from './QuoteItemLandscapeMedia';

const SelectedLayout = (props) => {

	switch (props.layout) {

		case 'PortraitImage':
			return <QuoteItemPortraitImage {...props}/>;

		case 'LandscapeMedia':
			return <QuoteItemLandscapeMedia {...props}/>;

		default:
			return <QuoteItemStandard {...props}/>;
	}
};

export default SelectedLayout;