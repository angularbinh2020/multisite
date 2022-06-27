import React, { useEffect, useState, useRef } from 'react';
import { useSystemContext } from '../../../Core/Contexts';
import renderComponent from 'recompose/renderComponent';

export default function ThemeTemplatePicker() {
	const [{ pageData }] = useSystemContext();
	const [PickedTemplate, setPickedTemplate] = useState();
  const isMounted = useRef(true);
  
	useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, []);

	useEffect(() => {
		if (pageData && pageData.template) {
			import(`./${pageData.template}`)
        .then((component) => {
          if (isMounted.current) {
            setPickedTemplate(renderComponent(component.default));
          }
        });
		}
	}, [pageData]);

	return PickedTemplate ? (
    <PickedTemplate />
	) : null;
}
