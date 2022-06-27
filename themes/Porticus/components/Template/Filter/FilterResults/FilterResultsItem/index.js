import React from 'react';
import ContentPicker from '../../../../../../../Core/ContentPicker';

const SelectedLayout = (props) => {

	if(props.resultItemProps.reactComponent === 'StoryItem' || props.resultItemProps.reactComponent === 'ArticleItem') {
		const newItemClasses = `${props.resultItemProps.itemClasses} list-view`;

		props.resultItemProps.itemClasses = newItemClasses;
		props.resultItemProps.layout = 'ListView';
	}

	return (
		<ContentPicker
			content={props.resultItemProps}
			isRoot={false}
		/>
	);
};

export default SelectedLayout;