import React, { useState, useEffect, useRef } from 'react';
import renderComponent from 'recompose/renderComponent';

export default function ThemeContentPicker(props) {
	const [PickedContent, setPickedContent] = useState();
  const isMounted = useRef(true);

	useEffect(() => {
		if (props.reactComponent) {
			import(`./${props.reactComponent}`)
        .then((component) => {
          if (isMounted.current) {
            setPickedContent(renderComponent(component.default));
          }
        });
    }
    
    return () => {
      isMounted.current = false;
    }
	}, []);

	return PickedContent ? (
    <PickedContent {...props}/>
	) : null;
}
