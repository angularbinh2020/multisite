import React from 'react';
import RichTextItemNarrow from './RichTextItemNarrow';
import RichTextItemStandard from './RichTextItemStandard';
import RichTextItemFull from './RichTextItemFull';

const SelectedLayout = (props) => {

	switch (props.layout) {

	case 'Narrow':
		return <RichTextItemNarrow {...props}/>;

	case 'Full':
		return <RichTextItemFull {...props}/>;

	default:
		return <RichTextItemStandard {...props}/>;
	}
};

export default SelectedLayout;