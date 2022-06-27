import React from 'react';
import { GridX, Cell } from '../../../../../../Helpers/JS/Foundation';
import convertBytesToSize from '../../../../../../Helpers/JS/ConvertBytesToSize'
import './DownloadItemStandard.scss'

const DownloadItemStandard = ({
	itemClasses,
	downloadFile,
	documentTypeAlias,
	gaEvent,
	layout
}) =>{
	return (
		<GridX className="grid-padding-x">
			<Cell className="small-24">
				<a 
					className={itemClasses} 
					data-component-category={gaEvent && gaEvent.componentCategory}
					data-component-layout={layout}
					data-component-doc-type-alias={documentTypeAlias}
					href={downloadFile.url} title={downloadFile.name} target="_blank" rel="noopener noreferrer"
				>
					<p className="download-item-title">{downloadFile.name}</p>

					<div className="download-item-file-and-arrow">
						<span className="download-item-file-type">{downloadFile.extension} - 	{convertBytesToSize(downloadFile.fileSizeBytes)}</span>
						<img className="download-item-arrow" src="/ui/icons/PorticusDownload.svg" alt="arrow"></img>
					</div>
				</a>
			</Cell>
		</GridX>
	);
}


export default DownloadItemStandard;