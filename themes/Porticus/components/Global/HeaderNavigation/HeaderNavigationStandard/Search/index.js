import React, { useEffect, useState } from 'react';
import DefaultComponent from './SearchOverlay';
import compose from 'recompose/compose';
import { withRouter } from 'react-router';
import { useSystemContext } from '../../../../../../../Core/Contexts';

const DefinedComponent = (props) => {
	const passedProps = {
		isSearchOpen: props.isSearchOpen,
		toggleSearch: props.toggleSearch
	};

	return <DefaultComponent {...passedProps} />;

};

const DefaultComponentWithRouter = withRouter(DefinedComponent);

export default DefaultComponentWithRouter;
