import React from 'react';
import DefaultComponent from './StatisticItemStandard';
import WrapperComponent from './StatisticItemStandardWrapper';
import useCmsProps from '../../../../Hooks/useCmsProps.js';

const DefinedComponent = (props) => {
	const cmsProps = useCmsProps(props);

	const passedProps = {
		itemClasses:props.itemClasses,
		amount:props.amount,
		description:props.description,
		title:props.title,
		...cmsProps
	};

	if(props.isRoot) {
		const wrapperClasses = 'section-wrapper ' + props.itemClasses;

		return (
			<WrapperComponent wrapperClasses={wrapperClasses} alias={props.alias}>
				<DefaultComponent {...passedProps} />
			</WrapperComponent>
		);
	}

	return <DefaultComponent {...passedProps} />;

}

export default DefinedComponent