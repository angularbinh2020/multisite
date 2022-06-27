import branch from 'recompose/branch';
import compose from 'recompose/compose';
import renderComponent from 'recompose/renderComponent';
import IPanelCompositionStandard from './IPanelCompositionStandard.js';
import IPanelCompositionWrapper from './IPanelCompositionWrapper.js';

export default compose(
	branch(({ isRoot }) => isRoot, renderComponent(IPanelCompositionWrapper))
)(IPanelCompositionStandard);
