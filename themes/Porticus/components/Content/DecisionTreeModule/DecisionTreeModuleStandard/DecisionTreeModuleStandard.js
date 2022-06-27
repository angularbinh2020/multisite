import React, { useState, useEffect } from 'react';
import ContentPicker from '../../../../../../Core/ContentPicker';
import { GridX, Cell, GridContainer } from '../../../../../../Helpers/JS/Foundation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DecisionTreeModuleStandard.scss';
import { Tween } from 'react-gsap';

const DecisionTreeModuleStandard = ({
	itemClasses,
	title,
	items,
	currentItem,
	currentOption,
	updateCurrentSelect,
	openDropdownHandler,
	isOpen,
	emptyItem,
	documentTypeAlias,
	gaEvent,
	layout
}) => {
	const [tween, setTween] = useState()
	const [from, setFrom] = useState({ height: 0 });
	const [to, setTo] = useState({ height: 0 });

	useEffect(() => {

		const height = tween ? tween.targets[0].scrollHeight : 0 // 'auto' doesn't work

		if (isOpen) {
			setFrom({ height: 0 })
			setTo({ height: height })
		} else {
			setFrom({ height: 'auto' })
			setTo({ height: 0 })
		}

	}, [isOpen])

	return (
		<div 
			className={itemClasses}
			data-component-category={gaEvent && gaEvent.componentCategory}
			data-component-layout={layout}
			data-component-doc-type-alias={documentTypeAlias}
		>
			<a id="form-top"></a>
			<GridContainer>
				<GridX className="grid-padding-x">
					<Cell className="small-24">
						<h3 className="decision-tree-module-title">{title}</h3>
					</Cell>

					<Cell className="small-24 large-12 large-offset-12">
						<div className="decision-tree-select">
							<div className="select-wrapper">
								<select value={currentOption} onChange={(e) => updateCurrentSelect(e)}>
									{items &&
										items.map((item, i) => (
											<option key={i}>{item.title}</option>
										))
									}
								</select>
							</div>

							<div className="dropdown-replacement-wrapper">
								<div className={'dropdown-replacement' + (isOpen ? ' open' : '')}>
									<div className="dropdown-replacement-selected" onClick={(e) => openDropdownHandler()}>
										{items &&
											items.map((value, i) => {
												if (value.selected) {
													return <span key={i}>{value.title}</span>;
												}
											})
										}
										<span className="dropdown-icon"><FontAwesomeIcon icon={['far', 'chevron-down']} /></span>
									</div>


									<Tween from={from} to={to} duration={0.2} ref={ref => setTween(ref)}>
										<ul className="dropdown-replacement-list ">
											{items &&
												items.map((value, i) => (
													<li className={value.selected ? 'selected' : ''} key={i}>
														<span data-selected={value.selected} onClick={(e) => { openDropdownHandler(); updateCurrentSelect(e, value.title); }}>{value.title}</span>
													</li>
												))
											}
										</ul>
									</Tween>
								</div>
							</div>
						</div>

						{currentItem && emptyItem !== false &&
							<React.Fragment>
								<ContentPicker content={currentItem} />
							</React.Fragment>
						}
					</Cell>
				</GridX>
			</GridContainer>
		</div>
	);
};


export default DecisionTreeModuleStandard;