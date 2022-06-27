import React from 'react';

import DefaultComponent from './StickyItem';

const DefinedComponent = (props) => {

	const passedProps = {
        children: props.children,
        snapTo: props.snapTo || '',
        topOffset: props.topOffset || 0
	};

    return <DefaultComponent {...passedProps} />;

}

export default DefinedComponent;