import React from 'react';
import './MediaModuleControls.scss';

const MediaModuleControls = ({
	title,
	currentTab,
	updateDataHandler,
	index
}) => (
	<li className={index === currentTab ? 'active' : 'in-active'}>
		<a href="#" title={title} onClick={(e) => updateDataHandler(title, index, e)}>{title}</a>
	</li>
);

export default MediaModuleControls;