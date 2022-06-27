import React, {useEffect, useRef} from 'react';
import DefaultComponent from './VideoOverlay';

const DefinedComponent = (props) => {
	const videoItem = useRef(null)

	const passedProps = {
		videoItem: videoItem,
		videoUrl: props.videoUrl,
	}

	return <DefaultComponent {...passedProps} />
	
}

export default DefinedComponent
