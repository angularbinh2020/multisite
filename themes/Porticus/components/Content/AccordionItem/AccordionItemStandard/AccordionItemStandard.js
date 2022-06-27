import React, {useState, useEffect} from 'react';
import reactHtmlParser from 'react-html-parser';
import {Tween } from 'react-gsap';
import './AccordionItemStandard.scss';
import { GridX, Cell } from '../../../../../../Helpers/JS/Foundation';

const AccordionItem = ({
	title,
	subTitle,
	text,
	updateActiveItem,
	index,
	isActive,
	itemClasses,
	gaEvent,
	layout,
	documentTypeAlias
}) => {
	const [tween, setTween] = useState()
	const [from, setFrom] = useState({height: 0});
	const [to, setTo] = useState({height: 0});

	useEffect(() => {

		const height = tween ? tween.targets[0].scrollHeight : 0

		if(isActive){
			setFrom({height: 0})
			setTo({height: height})
		} else {
			setFrom({height: 'auto'})
			setTo({height: 0})
		}

	}, [isActive])

	return (
		<div
			className={itemClasses + (isActive ? ' active' : '')}
			data-component-category={gaEvent && gaEvent.componentCategory}
			data-component-layout={layout}
			data-component-doc-type-alias={documentTypeAlias}
		>
			<div className="accordion-item-title-container" onClick={updateActiveItem} data-id={index}>
				<h3 className="accordion-item-title">{title}</h3>

				<div className="subtitle-and-icon">
					<h4 className="accordion-item-sub-title">{subTitle}</h4>
					<i className="accordion-icon"></i>
				</div>
			</div>

			<Tween from={from} to={to} duration={0.2} ref={ref => setTween(ref)}>
				<div className="accordion-item-content" >
					<GridX>
						<Cell className="small-24 large-12 large-offset-12">
							{reactHtmlParser(text)}
						</Cell>
					</GridX>
				</div>
			</Tween>

		</div>
	)
}

export default AccordionItem;
