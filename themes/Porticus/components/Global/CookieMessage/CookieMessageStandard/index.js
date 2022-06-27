import React, { useEffect, useState } from 'react';
import DefaultComponent from './CookieMessageStandard';
import { useSystemContext } from '../../../../../../Core/Contexts';
import getCookieProps from '../../../../../../Helpers/JS/Cookie'

const DefinedComponent = () => {
	const [{ globalData }] = useSystemContext();
	const [hide, setHide] = useState(false);
	const [hidden, setHidden] = useState(true);
	const cookieProps = getCookieProps();

	useEffect(() => {

		setHidden(cookieProps.isHidden);

	}, []);

	const handleClick = (e) => {
		setHide(true);
		cookieProps.setCookie(cookieProps.cookieName, true, 183);
	};

	const passedProps = {
		cookieBanner: globalData.cookieBanner,
		handleClick: handleClick,
		hide: hide,
		hidden: hidden
	};

	if(hidden){
		return null;
	}

	return <DefaultComponent {...passedProps} />;

};

export default DefinedComponent;
