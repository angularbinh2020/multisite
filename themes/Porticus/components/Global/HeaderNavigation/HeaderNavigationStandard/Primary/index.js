import React from 'react';
import Primary from './Primary';

const SelectedLayout = (props) => {

	return (
		<Primary
			highlightedNavigation={props.highlightedNavigation}
			primaryNavigation={props.primaryNavigation} 
		/>
	);

};

export default SelectedLayout;