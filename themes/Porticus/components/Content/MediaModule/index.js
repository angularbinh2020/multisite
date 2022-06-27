import compose from 'recompose/compose';
import branch from 'recompose/branch';
import renderComponent from 'recompose/renderComponent';
import MediaModuleStandard from './MediaModuleStandard';

export default compose(
	branch(({ Layout }) => Layout === 'Narrow', renderComponent(MediaModuleStandard))
)(MediaModuleStandard);