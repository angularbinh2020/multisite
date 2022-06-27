import React from 'react';
import './VideoOverlay.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const VideoOverlay = ({
	videoUrl
}) => (
	<div dangerouslySetInnerHTML={{ __html: videoUrl }}></div>


);

export default VideoOverlay;