import React from 'react';
import PromotionItemFull from './PromotionItemFull';
import PromotionItemLargeCta from './PromotionItemLargeCta';
import PromotionItemWithShape from './PromotionItemWithShape';
import PromotionItemWithShapeSmall from './PromotionItemWithShapeSmall';
import PromotionItemStandard from './PromotionItemStandard';

const SelectedLayout = (props) => {

	switch (props.layout) {

	case 'BackgroundImage':
		return <PromotionItemStandard {...props}/>;

	case 'Full':
		return <PromotionItemFull {...props}/>;

	case 'LargeCta':
		return <PromotionItemLargeCta {...props}/>;

	case 'WithShape':
		return <PromotionItemWithShape {...props}/>;

	case 'WithShapeSmall':
		return <PromotionItemWithShapeSmall {...props}/>;

	default:
		return <PromotionItemStandard {...props}/>;
	}
};

export default SelectedLayout;