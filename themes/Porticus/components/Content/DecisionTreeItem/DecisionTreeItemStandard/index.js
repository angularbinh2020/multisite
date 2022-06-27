import React, { useState, useEffect, useRef } from 'react';
import renderComponent from 'recompose/renderComponent';
import DefaultComponent from './DecisionTreeItemStandard';
import WrapperComponent from './DecisionTreeItemStandardWrapper';
import useCmsProps from '../../../../Hooks/useCmsProps.js';

const DefinedComponent = (props) => {
	const cmsProps = useCmsProps(props);
	const [pickedContent, setPickedContent] = useState();
  const isMounted = useRef(true);
  
	useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, []);

	useEffect(() => {
		if (props.embeddedContent[0].reactComponent) {
			import('../../../Content')
				.then((component) => {
          if (isMounted.current) {
            setPickedContent(renderComponent(component.default));
          }
				});
		}
	}, [props.embeddedContent[0]]);

	const passedProps = {
		itemClasses: props.itemClasses,
		InnerModule: pickedContent,
		itemProps: props.embeddedContent[0],
		...cmsProps
	};

	if (props.isRoot) {
		const wrapperClasses = 'component-wrapper';

		return (
			<WrapperComponent wrapperClasses={wrapperClasses} alias={props.alias}>
				<DefaultComponent {...passedProps} />
			</WrapperComponent>
		);
	}

	return <DefaultComponent {...passedProps} />;

};

export default DefinedComponent;