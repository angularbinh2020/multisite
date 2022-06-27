import React from 'react';
import VideoOverlay from '../../../Global/VideoOverlay'
import './VideoItemStandard.scss';

const VideoItemStandard = ({
	itemClasses,
	title,
	videoUrl,
	documentTypeAlias,
	gaEvent,
	layout
}) => {
	return (
		<div 
			className={`${itemClasses} standard`}
			data-component-category={gaEvent && gaEvent.componentCategory}
			data-component-layout={layout}
			data-component-doc-type-alias={documentTypeAlias}
		>
			<VideoOverlay videoUrl = {videoUrl}
			/>

		</div>
	)
}

export default VideoItemStandard;