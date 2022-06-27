import React from 'react';
import DefaultComponent from './GridView';

const DefinedComponent = (props) => {

	const mappedProps = {
		description: props.description || props.bio,
		itemClasses : props.itemClasses,
		name : props.name,
		title : props.jobTitle,
		image : props.image,
		link : props.link,
	}

	const Component = () => {
		return (
			<DefaultComponent {...mappedProps} />
		)
	}

	return <Component />

}

export default DefinedComponent