import React from 'react';
import ArticleItemStandard from './ArticleItemStandard';
import ArticleItemGridView from './ArticleItemGridView';
import ArticleItemGridViewFeatured from './ArticleItemGridViewFeatured';
import ArticleItemListView from './ArticleItemListView';
import ArticleItemListViewFeatured from './ArticleItemListViewFeatured';

const SelectedLayout = (props) => {
	switch (props.layout) {

	case 'GridView':
		return <ArticleItemGridView {...props} />;

	case 'GridViewFeatured':
		return <ArticleItemGridViewFeatured {...props} />;

	case 'ListView':
		return <ArticleItemListView {...props} />;

	case 'ListViewFeatured':
		return <ArticleItemListViewFeatured {...props} />;

	default:
		return <ArticleItemStandard {...props} />;
	}
};

export default SelectedLayout;