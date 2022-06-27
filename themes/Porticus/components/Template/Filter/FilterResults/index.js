import React from 'react';
import DefaultComponent from './FilterResults';

const DefinedComponent = (props) => {

	const passedProps = {
		results: props.results,
		errorMessage: props.errorMessage
	};

	return <DefaultComponent {...passedProps} />;
};

export default DefinedComponent;