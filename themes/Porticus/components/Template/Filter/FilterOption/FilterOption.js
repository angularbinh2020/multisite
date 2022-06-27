import React, {useState, useEffect} from 'react';

import './FilterOption.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tween } from 'react-gsap';

const FilterOption = ({
	title,
	filterItems,
	updateFilterCategoriesHandler,
	updateFilterCategoriesChangeHandler,
	openDropdownHandler,
	isOpen,
	currentOption
}) => {
	const [tween, setTween] = useState()
	const [from, setFrom] = useState({height: 0});
	const [to, setTo] = useState({height: 0});

	useEffect(() => {

		const height = tween ? tween.targets[0].scrollHeight : 0 // 'auto' doesn't work

		if(isOpen){
			setFrom({height: 0})
			setTo({height: height})
		} else {
			setFrom({height: 'auto'})
			setTo({height: 0})
		}

	}, [isOpen])

	return (
		<div className="filter-results-filter-item">
			<div className="select-wrapper">
				<select value={currentOption} onChange={(e) => updateFilterCategoriesChangeHandler(e, title)}>
					{filterItems &&
						filterItems.map((value, i) => (
							<option key={i} >
								{value.value}
							</option>
						))
					}
				</select>
				<i><FontAwesomeIcon icon={['far', 'chevron-down']} /></i>
			</div>

			<div className="dropdown-replacement-wrapper">
				<div className={'dropdown-replacement' + (isOpen ? ' open' : '')}>
					<div className="dropdown-replacement-selected" onClick={(e) => openDropdownHandler()}>
						{filterItems &&
							filterItems.map((value, i) => {
								if(value.selected) {
									return <span key={i}>{value.value}</span>;
								}
							})
						}
						<span className="dropdown-icon"><FontAwesomeIcon icon={['far', 'chevron-down']} /></span>
					</div>

					<Tween from={from} to={to} duration={0.2} ref={ref => setTween(ref)}>
						<ul className="dropdown-replacement-list">
							{filterItems &&
								filterItems.map((value, i) => (
									<li 
										className={value.selected ? 'selected' : ''}
										data-selected={value.selected} 
										key={i} 
										onClick={(e) => {openDropdownHandler(); updateFilterCategoriesHandler(value.value, title);}}
									>
										<span>{value.value}</span>
									</li>
								))
							}
						</ul>
					</Tween>
				</div>
			</div>
		</div>
	)
}

export default FilterOption;